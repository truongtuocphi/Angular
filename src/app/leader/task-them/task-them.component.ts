import { Component } from '@angular/core';
import { DulieuService } from '../../dulieu.service';

@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.scss']
})
export class TaskThemComponent {
  constructor(private d:DulieuService) {}

  number:number = 0;
  listduanTask:any = [{ id: 0, tenTask: "", duAnID: 0, nhanvienID: 0, mota: "", status: 0, priority: 0 }];
  listNvTask:any;

  ngOnInit():void {
    this.d.getDuAn().subscribe(data => this.listduanTask = data);
    this.d.getNhanVien().subscribe(data => this.listNvTask = data);
  }

  themTask(dataFrom:any) {
    this.d.themTask(dataFrom).subscribe(data => alert("Thêm Task thành công"));
    window.location.href = "http://localhost:4200/leader/task";
  }
}

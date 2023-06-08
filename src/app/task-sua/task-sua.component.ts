import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DulieuService } from '../dulieu.service';

@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.scss']
})
export class TaskSuaComponent {
  constructor(private data:DulieuService, private rotuer:ActivatedRoute) { }

  listNvTask:any;
  listduanTask:any;
  onTask:any;
  
  ngOnInit() {
    let id = this.rotuer.snapshot.params['id'];
    this.data.getNhanVien().subscribe(data => this.listNvTask = data);
    this.data.getDuAn().subscribe(data => this.listduanTask = data);
    this.data.getTaskByID(id).subscribe(data => this.onTask = data);
  }

  suaTask() {
    this.data.suaTask(this.onTask).subscribe(data => data);
    window.location.href = 'http://localhost:4200/task';
  }
}

import { Component } from '@angular/core';
import { DulieuService } from '../../dulieu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.scss']
})
export class DuanSuaComponent {
  constructor(private router: ActivatedRoute, private data:DulieuService) {}
  listNhanVien: any = [
    { id: 0, ho: '', ten: '', ngaysinh: '', phai: true, khuvuc: 0 }
  ];

  duan:any;

  ngOnInit() {
    this.data.getNhanVien().subscribe(d => this.listNhanVien = d);
    let id = this.router.snapshot.params['id'];
    this.data.getOneDuAn(id).subscribe(d => this.duan = d);
  }

  suaDuAn() {
    this.data.suaDuAn(this.duan).subscribe(data => data);
    window.location.href = '/leader/duan';
  }
}

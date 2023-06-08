import { Component } from '@angular/core';
import { Nhanvien } from '../nhanvien';
import { DulieuService } from '../dulieu.service';

@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.scss']
})
export class NvListComponent {
  constructor(private data:DulieuService) {}
  // listNhanVien:Nhanvien[] = [
  //   {id: 1, ho: 'Nguyễn Bá', ten: 'Đạo', ngaysinh: '2001-1-3', phai: true, khuvuc: 'Bắc'},
  //   {id: 2, ho: 'Phạm Kỷ', ten: 'Luật', ngaysinh: '2001-5-6', phai: true, khuvuc: 'Bắc'},
  //   {id: 3, ho: 'Mai Thanh', ten: 'Toán', ngaysinh: '2002-6-15', phai: true, khuvuc: 'Nam'},
  //   {id: 4, ho: 'Cao Thị Chót', ten: 'Vót', ngaysinh: '2002-8-19', phai: false, khuvuc: 'Nam'},
  //   {id: 5, ho: 'Mai Phật Sáu', ten: 'Ngàn', ngaysinh: '2001-2-28', phai: false, khuvuc: 'Trung'}
  // ];

  listNhanVien:any;
  tukhoa:string = '';
  nhanvien:Nhanvien[] = [];
  
  ngOnInit():void {
    this.data.getNhanVien().subscribe((d:any) => { 
      this.nhanvien = this.listNhanVien;
      this.listNhanVien = d;
    })
  }

  locNV() {
    this.listNhanVien = this.nhanvien.filter(p => p.ten.includes(this.tukhoa));
    this.listNhanVien = this.nhanvien.filter(p => p.ho.includes(this.tukhoa));
  }

  xoaNV(id:number) {
    this.data.xoaNhanVien(id).subscribe(data => data);
    window.location.href = 'http://localhost:4200/nhanvien';
  }
}

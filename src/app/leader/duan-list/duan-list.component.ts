import { Component, EventEmitter, Output } from '@angular/core';
import { DulieuService } from '../../dulieu.service';
import { Duan } from '../../duan';

@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.scss']
})

export class DuanListComponent {
  constructor(private d:DulieuService) { }
  // listDuAn:Duan[] = [
  //   {id: 1, tenDuAn: 'Quản lý trại heo', ngayStart: '2022-03-01', tien: 67000000, leader: 1, thanhvien:[1, 3, 4]},
  //   {id: 2, tenDuAn: 'Cây xanh công viên', ngayStart: '2022-04-02', tien: 98500000, leader: 1, thanhvien:[1, 3, 4]},
  //   {id: 3, tenDuAn: 'Website văn hóa Việt', ngayStart: '2022-04-15', tien: 35000000, leader: 2, thanhvien:[2, 4]},
  //   {id: 4, tenDuAn: 'Website du lịch bụi', ngayStart: '2022-04-21', tien: 75500000, leader: 2, thanhvien:[2, 4]},
  //   {id: 5, tenDuAn: 'Quản lý nhà thuộc Vĩnh An', ngayStart: '2022-05-02', tien: 97000000, leader: 3, thanhvien:[3, 4]},
  //   {id: 6, tenDuAn: 'Chăm sóc thú cưng', ngayStart: '2022-02-11', tien: 18000000, leader: 3, thanhvien:[3, 4]},
  // ];

  listDuAn:any;
  listNhanVien:any;
  listDuAnFirst:Duan[] = [];
  tukhoa:string = '';
  
  ngOnInit():void {
    this.d.getDuAn().subscribe(data => {
      this.listDuAn = data
      this.listDuAnFirst = this.listDuAn;
    });
    
    this.d.getNhanVien().subscribe(data => {
      this.listNhanVien = data;
    });
  }

  @Output() capnhatidDuAn = new EventEmitter();
  xemChiTietDuAn(id:number) {
    var duan = this.listDuAn.find((duan: { id: number; }) => duan.id == id);
    this.capnhatidDuAn.emit(duan);
  }

  locDuAn() {
    console.log(this.tukhoa);
    this.listDuAn = this.listDuAnFirst.filter(p => p.tenDuAn.includes(this.tukhoa))
  }

  xoaDuAn(id:number) {
    this.d.xoaDuAn(id).subscribe(data => data);
    window.location.href = '/leader/duan';
  }

  getLeader(id:number) {
    const leaderNV = this.listNhanVien.find((nv:any) => nv.id == id)
    if(leaderNV) {
      return leaderNV.ho + ' ' + leaderNV.ten;
    }
    return '';
  }
}

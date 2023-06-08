import { Component, Input } from '@angular/core';
import { Duan } from '../duan';

@Component({
  selector: 'app-chitietduan',
  templateUrl: './chitietduan.component.html',
  styleUrls: ['./chitietduan.component.scss']
})
export class ChitietduanComponent {
 @Input() duanchitiet:Duan = {
  id: 0,
  tenDuAn: '',
  ngayStart: '',
  tien: 0,
  leader: 0,
  thanhvien: []
 }
}

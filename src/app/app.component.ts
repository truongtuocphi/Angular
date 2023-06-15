import { Component } from '@angular/core';
import { Duan } from './duan';
import { Moment } from 'moment';
import { AuthService } from 'src/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth:AuthService) {  }
  title = 'ASM2';

  idToken:any
  ngOnInit() {
    this.idToken = localStorage.getItem("id_token");
  }

  chucNang:string = '';
  ganCN(cn:string) {
    this.chucNang = cn;
    if(this.chucNang != 'ct') this.duanDangXem = null;
  }

  duanDangXem:any = null;
  ganDuAn(duan:Duan) {
    this.duanDangXem = duan;
    this.chucNang = 'ct';
  }

  tukhoa:string = '';
  locDuAn() {
    console.log(this.tukhoa);
  }

  thoat() {
    this.auth.outLogin();
    window.location.replace("/employee/dangnhap");
  }
}

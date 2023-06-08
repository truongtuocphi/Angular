import { Component } from '@angular/core';
import { Duan } from './duan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ASM1';

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
}

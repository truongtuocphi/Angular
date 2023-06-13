import { Component } from '@angular/core';
import { DulieuService } from '../../dulieu.service';

@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.scss']
})
export class NvThemComponent {
  constructor(private data:DulieuService) { }

  themNV(dataFrom:any) {
      this.data.themNhanVien(dataFrom).subscribe(data => alert('Thêm thành công'));
      window.location.href = 'http://localhost:4200/leader/nhanvien';
  }
}

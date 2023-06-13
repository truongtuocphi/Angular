import { Component } from '@angular/core';
import { DulieuService } from '../../dulieu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.scss']
})
export class NvSuaComponent {
  constructor(private data:DulieuService, private router:ActivatedRoute) {  }
 
  dataNV:any = [];
  
  ngOnInit():void {
    let id = this.router.snapshot.params['id'];
    this.data.getNhanVienByID(id).subscribe(d => this.dataNV = d);
  }

  suaNV() {
    this.data.suaNhanVien(this.dataNV).subscribe(data => data);
    window.location.href = 'http://localhost:4200/leader/nhanvien';
  }
}

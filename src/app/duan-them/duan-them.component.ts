import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DulieuService } from '../dulieu.service';

@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.scss']
})
export class DuanThemComponent implements OnInit {
  constructor(private d:DulieuService, private formBuilder: FormBuilder) {}

  listNhanVien: any = [
    { id: 0, ho: '', ten: '', ngaysinh: '', phai: true, khuvuc: 0 }
  ];
  myForm!: FormGroup;
  isFormValid: boolean = false;
  ngOnInit():void {
    this.d.getNhanVien().subscribe(data => this.listNhanVien = data);
  }

  themDuAn(dataForm:any) {
    this.d.themDuAn(dataForm).subscribe( data => alert('Thêm dự án thành công'));
    window.location.href = '/duan';
  }

  isFormSubmitted: boolean = false;
  submitForm() {

  }
}

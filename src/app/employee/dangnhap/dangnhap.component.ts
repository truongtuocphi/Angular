import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss']
})
export class DangnhapComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void { }

  xyLyDN(dataForm: any) {
    this.auth.login(dataForm.username, dataForm.password).subscribe(
      res => {
        var d = JSON.parse(res);
        console.log("Đăng nhập thành công ", res);
        const expiresAt = moment().add(d.expiresIn, 'second');
        localStorage.setItem('id_token', d.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
        window.location.replace('/leader');
        this.router.navigateByUrl('/leader');
      },
      error => {
        console.log('oops', error);
        this.router.navigateByUrl('/employee/dangnhap');
      }
    )
  }
}

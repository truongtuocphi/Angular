import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { JoinComponent } from './join/join.component';
import { HomeLoginComponent } from './home-login/home-login.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    DangkyComponent,
    DangnhapComponent,
    JoinComponent,
    HomeLoginComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EmployeeModule { }
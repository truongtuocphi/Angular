import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderComponent } from './leader.component';
import { baoveGuard } from '../employee/baove.guard';

import { HomeComponent } from './home/home.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { ChitietduanComponent } from './chitietduan/chitietduan.component';

const routes: Routes = [
  { path: '', component: LeaderComponent },
  { path: '', component: HomeComponent },
  { path: 'duan', component: DuanListComponent, canActivate: [baoveGuard] },
  { path: 'chitietduan/:id', component:ChitietduanComponent, canActivate: [baoveGuard] },
  { path: 'duan/them', component: DuanThemComponent, canActivate: [baoveGuard] },
  { path: 'duan/sua/:id', component: DuanSuaComponent, canActivate: [baoveGuard] },
  { path: 'nhanvien', component: NvListComponent, canActivate: [baoveGuard] },
  { path: 'nhanvien/them', component: NvThemComponent, canActivate: [baoveGuard] },
  { path: 'nhanvien/sua/:id', component: NvSuaComponent, canActivate: [baoveGuard] },
  { path: 'task', component: TaskListComponent, canActivate: [baoveGuard] },
  { path: 'task/them', component: TaskThemComponent, canActivate: [baoveGuard] },
  { path: 'task/sua/:id', component: TaskSuaComponent, canActivate: [baoveGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderRoutingModule { }

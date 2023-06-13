import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LeaderRoutingModule } from './leader-routing.module';
import { LeaderComponent } from './leader.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { TaskThemComponent } from './task-them/task-them.component';


@NgModule({
  declarations: [
    LeaderComponent,
    DuanListComponent,
    DuanSuaComponent,
    DuanThemComponent,
    NvListComponent,
    NvSuaComponent,
    NvThemComponent,
    TaskListComponent,
    TaskSuaComponent,
    TaskThemComponent,
  ],
  imports: [
    CommonModule,
    LeaderRoutingModule,
    FormsModule
  ]
})
export class LeaderModule { }

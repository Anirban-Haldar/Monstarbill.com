import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SidenavComponent } from '../../component/sidenav/sidenav.component';
import { HeaderComponent } from '../../component/header/header.component';

import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  { path:"", component:DashboardComponent }
]


@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }

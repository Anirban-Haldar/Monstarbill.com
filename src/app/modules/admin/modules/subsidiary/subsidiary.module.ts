import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../../component/sidenav/sidenav.component';
import { HeaderComponent } from '../../component/header/header.component';
import { SubsidiaryEntryComponent } from './subsidiary-entry/subsidiary-entry.component';

import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  { path:"", component:SubsidiaryEntryComponent }
]

@NgModule({
  declarations: [
    SubsidiaryEntryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SubsidiaryModule { }

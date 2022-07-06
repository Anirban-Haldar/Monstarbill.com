import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginauthComponent } from './components/loginauth/loginauth.component';

import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"login", component:LoginComponent },
  { path:"loginauth", component:LoginauthComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LoginauthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }

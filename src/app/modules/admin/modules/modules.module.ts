import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes} from '@angular/router';

//import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
//import { SubsidiaryEntryComponent } from './subsidiary/subsidiary-entry/subsidiary-entry.component';

const routes: Routes = [
  //{ path:"subsidiaryEntry", component:SubsidiaryEntryComponent },
  // { path:"loginauth", component:LoginauthComponent}
]

@NgModule({
  declarations: [
  ],
  imports: [

    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ModulesModule { }

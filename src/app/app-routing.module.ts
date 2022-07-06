import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"", loadChildren:() =>import("./modules/public/public.module").then(m=>m.PublicModule) },
  { path:"login", loadChildren:() =>import("./modules/public/public.module").then(m=>m.PublicModule) },
  { path:"loginauth", loadChildren:() =>import("./modules/public/public.module").then(m=>m.PublicModule) },
  { path:"dashboard", loadChildren:() =>import("./modules/admin/modules/dashboard/dashboard.module").then(m=>m.DashboardModule) },
  { path:"SubsidiaryEntry", loadChildren:() =>import("./modules/admin/modules/subsidiary/subsidiary.module").then(m=>m.SubsidiaryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

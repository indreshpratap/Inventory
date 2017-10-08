import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { Routes, RouterModule } from "@angular/router";

 const routes:Routes = [
  {
    path:"user-dashboard",component:UserDashboardComponent
  }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserDashboardComponent]
})
export class UserModule { }

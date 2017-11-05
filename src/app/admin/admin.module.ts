import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from "@angular/router";
import { ProductRegComponent } from './product-reg/product-reg.component';

const routes:Routes = [
  {path:"dashboard",component:AdminDashboardComponent },
  {path:"prod-reg",component: ProductRegComponent }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminDashboardComponent, ProductRegComponent]
})
export class AdminModule { }

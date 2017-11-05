import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: "dashboard", component: UserDashboardComponent },
  { path: "products", component: ProductListComponent }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserDashboardComponent, ProductListComponent]
})
export class UserModule { }

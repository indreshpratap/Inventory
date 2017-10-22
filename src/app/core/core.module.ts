import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "app/core/login/login.component";
import { HomeComponent } from './home/home.component';
import { AdminModule } from "app/admin/admin.module";
import { UserModule } from "app/user/user.module";
import { AuthService } from "app/core/auth.service";

const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children: [
      { path: "user", loadChildren: "app/user/user.module#UserModule" },
      { path: "admin", loadChildren: "app/admin/admin.module#AdminModule" },
    ]
  },
  { path: "login", component: LoginComponent },

];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    AdminModule,
    UserModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  providers: [AuthService]
})
export class CoreModule { }

import { Routes } from "@angular/router/router";
import { HomeComponent } from "app/core/home/home.component";
import { LoginComponent } from "app/core/login/login.component";

export const routes: Routes = [
    {
      path: "", component: HomeComponent,
      children: [
        { path: "user", loadChildren: "./user/user.module#UserModule" },
        { path: "admin", loadChildren: "./admin/admin.module#AdminModule" },
      ]
    },
    { path: "login", component: LoginComponent },
  
  ];
  
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";

import { SharedModule } from "../shared/shared.module";




@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  exports :[
    LoginComponent,
    HomeComponent
  ],
  providers: []
})
export class CoreModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from "@angular/router";
import { CoreModule } from "app/core/core.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header.component";
import { routes} from "./app.routing";
import 'rxjs/Rx';
import { AdminModule } from "app/admin/admin.module";
import { UserModule } from "app/user/user.module";
import { AuthService } from "app/core/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AdminModule,
    UserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { Http, XHRBackend, RequestOptions } from "@angular/http";
import { HttpAuthFactory } from "app/core/http.factory";


export function httpClientFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions,router: Router): Http {
  return new HttpAuthFactory(xhrBackend, requestOptions,router);
}
// Material
import { MatButtonModule,
   MatSidenavModule,
    MatCheckboxModule,
     MatToolbarModule,
     MatTabsModule,
     MatCardModule, 
     MatFormFieldModule,
     MatInputModule
    } from '@angular/material';
import { Router } from "@angular/router";

const MODULES = [
  CommonModule,
  HttpModule,
  FormsModule,
  MatButtonModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule

];

@NgModule({
  imports: MODULES,
  exports: MODULES,
  providers:[{ provide: Http, useFactory: httpClientFactory, deps: [XHRBackend, RequestOptions,Router] }],
  declarations: []
})
export class SharedModule { }

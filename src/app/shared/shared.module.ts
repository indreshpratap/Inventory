import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { Http, XHRBackend, RequestOptions } from "@angular/http";
import { HttpAuthFactory } from "app/core/http.factory";


export function httpClientFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions,router: Router): Http {
  return new HttpAuthFactory(xhrBackend, requestOptions,router);
}
// Material

    import {MatButtonModule} from "@angular/material/button";
    import {MatInputModule} from "@angular/material/input";
    import {MatFormFieldModule} from "@angular/material/form-field";
    import {MatCardModule} from "@angular/material/card";
    import {MatTabsModule} from "@angular/material/tabs";
    import {MatToolbarModule} from "@angular/material/toolbar";
    import {MatCheckboxModule} from "@angular/material/checkbox";
    import {MatSidenavModule} from "@angular/material/sidenav";
    import {MatTableModule} from "@angular/material/table";
    

import { Router } from "@angular/router";

const MODULES = [
  CommonModule,
  HttpModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule

];

@NgModule({
  imports: MODULES,
  exports: MODULES,
  providers:[{ provide: Http, useFactory: httpClientFactory, deps: [XHRBackend, RequestOptions,Router] }],
  declarations: []
})
export class SharedModule { }

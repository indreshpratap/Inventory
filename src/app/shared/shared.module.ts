import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
// Material
import { MatButtonModule, MatSidenavModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';

const MODULES = [
  CommonModule,
  HttpModule,
  MatButtonModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatToolbarModule

];

@NgModule({
  imports: MODULES,
  exports: MODULES,
  declarations: []
})
export class SharedModule { }

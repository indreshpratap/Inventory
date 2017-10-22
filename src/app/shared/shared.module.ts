import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
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
  declarations: []
})
export class SharedModule { }

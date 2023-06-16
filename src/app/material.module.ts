import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatCheckboxModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HaspermissionDirective} from "./haspermission.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HaspermissionDirective
  ],
  exports:[
    HaspermissionDirective
  ]
})
export class PermissionModule { }

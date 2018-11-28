import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AddbillComponent} from "./maincomponets/addbill/addbill.component";
import {AppGuard} from "../app.guard";
import {ViewbillComponent} from "./maincomponets/viewbill/viewbill.component";

const billingRoutes: Routes = [

  {
    path: "bill",
    children: [
    {
        path: 'create',
        component: AddbillComponent,
        canActivate: [AppGuard],
    },
    {
        path: 'view',
        component: ViewbillComponent,
        canActivate: [AppGuard],
    }]}
];

@NgModule({
  imports: [
    RouterModule.forChild(billingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BillingRoutingModule { }

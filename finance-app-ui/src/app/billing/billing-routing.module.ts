import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddbillComponent} from "./maincomponets/addbill/addbill.component";
import {AppGuard} from "../app.guard";
import {ViewbillComponent} from "./maincomponets/viewbill/viewbill.component";
import {ViewElectricityBillComponent} from "./utility-bills/electricity/view/view-electricity-bill.component";
import {ViewTelephoneBillComponent} from "./utility-bills/telephone/view/view-telephone-bill.component";
import {ViewWaterBillComponent} from "./utility-bills/water/view/view-water-bill.component";

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
                path: 'show',
                canActivate: [AppGuard],
                children: [
                    {
                        path: 'electricity',
                        component: ViewElectricityBillComponent,
                        canActivate: [AppGuard]
                    },
                    {
                        path: 'telephone',
                        component: ViewTelephoneBillComponent,
                        canActivate: [AppGuard]
                    },
                    {
                        path: 'water',
                        component: ViewWaterBillComponent,
                        canActivate: [AppGuard]
                    }, {
                        path: 'internet',
                        component: ViewTelephoneBillComponent,
                        canActivate: [AppGuard]
                    }
                ]
            },
            {
                path: 'view',
                component: ViewbillComponent,
                canActivate: [AppGuard]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(billingRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BillingRoutingModule {
}

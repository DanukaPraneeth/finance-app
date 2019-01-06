import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./authentication/login/login.component";
import {HomeComponent} from "./home/home.component";
import {AppGuard, LoginGuard} from "./app.guard";
import {AuthenticationService} from "./services/authentication.service";
import {AppCommonService} from "./services/app-common.service";
import {CommonModule} from "@angular/common";
import {AlertModule, BsDropdownModule, ButtonsModule, ModalModule, TooltipModule} from "ngx-bootstrap";
import {HeaderComponent} from "./header/header.component";
import {HamburgerMenuComponent} from "./hamburger-menu/hamburger-menu.component";
import {UserAvatarComponent} from "./user-avatar/user-avatar.component";
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {BreadcrumbsComponent} from "./breadcrumbs/breadcrumbs.component";
import {SignupComponent} from "./authentication/signup/signup.component";
import {SharedModule} from "./shared/shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BillingModule} from "./billing/billing.module";
import {HttpClientModule} from "@angular/common/http";
import {ElectricityBillRemoteDataService} from "./remote/electricity_bill_remote.service";
import {ElectricityBillsService} from "./services/electricity-bill.service";
import {LoginRemoteDataService} from "./remote/login_remote-data.service";

import {ChartComponent} from "./chart/chart.component";
import {PiechartComponent} from "./piechart/piechart.component";
import {
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
} from "@angular/material";
import {CertifyCountComponent} from "./dashboards/certify-count/certify-count.component";
import {ChartsListComponent} from "./charts/charts-list/charts-list.component";
import {ChartsElectricityComponent} from "./charts/charts-bills/electricity/charts-electricity/charts-electricity.component";
import {ChartsWaterComponent} from "./charts/charts-bills/water/charts-water/charts-water.component";
import {ChartsTelephoneComponent} from "./charts/charts-bills/telephone/charts-telephone/charts-telephone.component";
import {DashboardService} from "./services/dashboard.service";
import {PermissionModule} from "./directives/permission.module";
import {ChartsModule} from "angular-bootstrap-md";
import {WaterBillsService} from "./services/water-bill.service";
import {WaterBillRemoteDataService} from "./remote/water_bill_remote.service";
import {TelephoneBillsService} from "./services/telephone-bill.service";
import {TelephoneBillRemoteDataService} from "./remote/telephone_bill_remote.service";
import {InternetBillsService} from "./services/internet-bill.service";
import {InternetBillRemoteDataService} from "./remote/internet_bill_remote.service";
import {ApprovalService} from "./services/approval.service";
import {ApprovalRemoteService} from "./remote/approval-remote.service";
import {MessageService} from "./services/message.service";
import {ToastyModule} from "ng2-toasty";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        HeaderComponent,
        HamburgerMenuComponent,
        UserAvatarComponent,
        MainMenuComponent,
        BreadcrumbsComponent,
        SignupComponent,
        ChartComponent,
        PiechartComponent,
        CertifyCountComponent,
        ChartsListComponent,
        ChartsElectricityComponent,
        ChartsWaterComponent,
        ChartsTelephoneComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        ModalModule.forRoot(),
        HttpClientModule,
        ButtonsModule.forRoot(),
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        AlertModule.forRoot(),
        ToastyModule.forRoot(),
        SharedModule,
        NgbModule,
        PermissionModule,
        BillingModule,
        AppRoutingModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        ChartsModule
    ],
    exports: [
        ModalModule,
        PermissionModule
    ],
    providers: [
        AppGuard,
        LoginGuard,
        AuthenticationService,
        ElectricityBillsService,
        ElectricityBillRemoteDataService,
        WaterBillsService,
        WaterBillRemoteDataService,
        TelephoneBillsService,
        TelephoneBillRemoteDataService,
        InternetBillsService,
        InternetBillRemoteDataService,
        LoginRemoteDataService,
        DashboardService,
        ApprovalService,
        ApprovalRemoteService,
        MessageService,
        AppCommonService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

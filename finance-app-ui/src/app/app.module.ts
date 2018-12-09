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
import {AlertModule, BsDropdownModule, ButtonsModule, TooltipModule} from "ngx-bootstrap";
import {HeaderComponent} from "./header/header.component";
import {HamburgerMenuComponent} from "./hamburger-menu/hamburger-menu.component";
import {UserAvatarComponent} from "./user-avatar/user-avatar.component";
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {HasPermissionsDirective} from "./directives/has-permissions.directive";
import {BreadcrumbsComponent} from "./breadcrumbs/breadcrumbs.component";
import {SignupComponent} from "./authentication/signup/signup.component";
import {SharedModule} from "./shared/shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BillingModule} from "./billing/billing.module";
import {HttpClientModule} from "@angular/common/http";
import {ElectricityBillRemoteDataService} from "./remote/electricity_bill_remote.service"
import {ElectricityBillsService} from "./services/electricity-bill.service"
import {LoginRemoteDataService} from "./remote/login_remote-data.service";
import { ChartComponent } from './chart/chart.component';
import { PiechartComponent } from './piechart/piechart.component';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { ModalModule }  from "ngx-bootstrap/modal"


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    HamburgerMenuComponent,
    UserAvatarComponent,
    MainMenuComponent,
    HasPermissionsDirective,
    BreadcrumbsComponent,
    SignupComponent,
    ChartComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    SharedModule,
    NgbModule,
    BillingModule,
    AppRoutingModule,
      MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
      ModalModule.forRoot()
  ],
  exports: [
        ModalModule
    ],
  providers: [
    AppGuard,
    LoginGuard,
    AuthenticationService,
    ElectricityBillsService,
    ElectricityBillRemoteDataService,
    LoginRemoteDataService,
    AppCommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

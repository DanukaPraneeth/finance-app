import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from 'angular-bootstrap-md';
import { AlertModule, BsDropdownModule, ButtonsModule, ModalModule, TooltipModule } from "ngx-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppGuard, LoginGuard } from "./app.guard";
import { LoginComponent } from "./authentication/login/login.component";
import { SignupComponent } from "./authentication/signup/signup.component";
import { BillingModule } from "./billing/billing.module";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { CertifyElectricityTableComponent } from "./certifiy/certifiy-bills/electricity/certify-electricity-table/certify-electricity-table.component";
import { CertifyElectricityComponent } from "./certifiy/certifiy-bills/electricity/certify-electricity/certify-electricity.component";
import { CertifyCountComponent } from "./certifiy/certify-count/certify-count.component";
import { CertifyListComponent } from "./certifiy/certify-list/certify-list.component";
import { ChartComponent } from './chart/chart.component';
import { HaspermissionDirective } from "./directives/haspermission.directive";
import { HamburgerMenuComponent } from "./hamburger-menu/hamburger-menu.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { PiechartComponent } from './piechart/piechart.component';
import { ElectricityBillRemoteDataService } from "./remote/electricity_bill_remote.service";
import { LoginRemoteDataService } from "./remote/login_remote-data.service";
import { ReportsElectricityComponent } from "./reports/reports-bills/electricity/reports-electricity/reports-electricity.component";
import { ReportsListComponent } from "./reports/reports-list/reports-list.component";
import { AppCommonService } from "./services/app-common.service";
import { AuthenticationService } from "./services/authentication.service";
import { ElectricityBillsService } from "./services/electricity-bill.service";
import { SharedModule } from "./shared/shared.module";
import { UserAvatarComponent } from "./user-avatar/user-avatar.component";



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
    HaspermissionDirective,
    CertifyCountComponent,
    CertifyListComponent,
    CertifyElectricityComponent,
    CertifyElectricityTableComponent,
    ReportsListComponent,
    ReportsElectricityComponent
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
    SharedModule,
    NgbModule,
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

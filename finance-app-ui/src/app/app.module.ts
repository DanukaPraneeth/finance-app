import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./authentication/login/login.component";
import {HomeComponent} from "./home/home.component";
import {FirstpageComponent} from "./firstpage/firstpage.component";
import {SecondpageComponent} from "./secondpage/secondpage.component";
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FirstpageComponent,
    SecondpageComponent,
    HeaderComponent,
    HamburgerMenuComponent,
    UserAvatarComponent,
    MainMenuComponent,
    HasPermissionsDirective,
    BreadcrumbsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    SharedModule,
    NgbModule,
    BillingModule,
    AppRoutingModule
  ],
  providers: [
    AppGuard,
    LoginGuard,
    AuthenticationService,
    AppCommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

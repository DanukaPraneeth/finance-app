import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./authentication/login/login.component";
import {HomeComponent} from "./home/home.component";
import {AppGuard, LoginGuard} from "./app.guard";
import {SignupComponent} from "./authentication/signup/signup.component";
import {ViewbillComponent} from "./billing/maincomponets/viewbill/viewbill.component";
import {ReportsListComponent} from "./reports/reports-list/reports-list.component"

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "signup",
    component: SignupComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "reports",
    component: ReportsListComponent,
    canActivate: [AppGuard]
  },
  {
    path: "viewBill",
    component: ViewbillComponent,
    canActivate: [AppGuard]
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AppGuard]
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

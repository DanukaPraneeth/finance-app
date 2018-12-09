import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./authentication/login/login.component";
import {HomeComponent} from "./home/home.component";
import {AppGuard, LoginGuard} from "./app.guard";
import {SignupComponent} from "./authentication/signup/signup.component";
import {ViewElectricityBillComponent} from "./billing/utility-bills/electricity/view/view-electricity-bill.component";

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
    path: "viewElectricityBills",
    component: ViewElectricityBillComponent,
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

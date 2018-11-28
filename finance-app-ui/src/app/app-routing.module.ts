import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./authentication/login/login.component";
import {HomeComponent} from "./home/home.component";
import {FirstpageComponent} from "./firstpage/firstpage.component";
import {AppGuard, LoginGuard} from "./app.guard";
import {BillingModule} from "./billing/billing.module";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AppGuard]
  },
  {
    path: "first",
    component: FirstpageComponent,
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
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

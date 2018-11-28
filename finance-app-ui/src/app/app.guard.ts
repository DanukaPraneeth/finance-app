import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router
} from "@angular/router";
import { AuthenticationService } from "./services/authentication.service";

@Injectable()
export class AppGuard implements CanActivate {
  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  canActivate() {
    if (this._authenticationService.isLoggedIn()) {
      return true;
    } else {
      this._router.navigate(["login"]);
      return false;
    }
  }
}

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  canActivate() {
    if (this._authenticationService.isLoggedIn()) {
      this._router.navigate(["home"]);
      return false;
    } else {
      return true;
    }
  }
}

import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/index";
import {LoginResponse} from "../models/data-models";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {

  loginUserInfo: BehaviorSubject<LoginResponse> = new BehaviorSubject(null);

  constructor(private _router: Router) {
    const _loginUserInfo = JSON.parse(sessionStorage.getItem('loginUserInfo'));
    this.loginUserInfo.next(_loginUserInfo);
  }

  login(userName: string, password: string) {
    const loginInfo = new LoginResponse();
    loginInfo.isLoggedIn = true;
    loginInfo.userName = userName;
    this.loginUserInfo.next(loginInfo);
    sessionStorage.setItem('loginUserInfo', JSON.stringify(loginInfo));
    this._router.navigate(['home']);
  }

  doLogout() {
    sessionStorage.setItem('loginUserInfo', null);
    this.loginUserInfo.next(null);
    this._router.navigate(['login']);
  }

  isLoggedIn() {
    const loginInfo = this.loginUserInfo && this.loginUserInfo.getValue();
    return !!loginInfo;
  }

  getUser() {
    return true;
  }

}

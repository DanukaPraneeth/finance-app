import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/index";
import {LoginResponse, SignupResponse, TempResponse} from "../models/data-models";
import {Router} from "@angular/router";
import {LoginRemoteDataService} from "../remote/login_remote-data.service";

@Injectable()
export class AuthenticationService {

  loginUserInfo: BehaviorSubject<LoginResponse> = new BehaviorSubject(null);

  constructor(private _router: Router, private _remoteService: LoginRemoteDataService) {
    const _loginUserInfo = JSON.parse(sessionStorage.getItem("loginUserInfo"));
    this.loginUserInfo.next(_loginUserInfo);
  }

  login(userName: string, password: string) {

    this._remoteService.login(userName, btoa(password))
        .subscribe((data: LoginResponse) => {

          const loginInfo = new LoginResponse();

          if (data["isLoggedIn"] == true) {
            loginInfo.isLoggedIn = true;
            loginInfo.userName = data["userName"];
            this.loginUserInfo.next(loginInfo);
            sessionStorage.setItem("loginUserInfo", JSON.stringify(loginInfo));
            this._router.navigate(["home"]);
          } else {
            sessionStorage.setItem("loginUserInfo", null);
          }
        });
  }

  signup(userName: string, password: string, roleVal: number){
    this._remoteService.signup(userName, btoa(password),roleVal)
        .subscribe((data: SignupResponse) => {
          if (data["isSuccess"] == true) {
            this._router.navigate(["login"]);
          } else {
            this._router.navigate(["singnup"]);
          }
        });
  }

  doLogout() {
    sessionStorage.setItem("loginUserInfo", null);
    this.loginUserInfo.next(null);
    this._router.navigate(["login"]);
  }

  isLoggedIn() {
    const loginInfo = this.loginUserInfo && this.loginUserInfo.getValue();
    return !!loginInfo;
  }

  getUser() {
    return true;
  }

}

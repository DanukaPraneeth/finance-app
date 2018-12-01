import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginResponse, Profile, User, SignupResponse} from "../models/data-models";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable()
export class LoginRemoteDataService {


  private url = new URL(window.location.href);
  private apiContext = this.url.protocol + '//' + this.url.host + '/finance';
  // private apiContext = "api";

  private apiEndpoints: Object = {
    login: this.apiContext + "/staff/login",
    logout: this.apiContext + "/authentication/logout",
    signup: this.apiContext + "/staff/signup",
  };

  private httpOptions = {
  headers: new HttpHeaders({
    "Content-Type":  "application/json",
  })
};

  constructor(private http: HttpClient) {
  }

  // login(userName: string, password: string) {
  //
  //   const user = new User();
  //   user.password = password;
  //   user.userName = userName;
  //     return this.http.get(this.apiEndpoints['login']);
  // }

  login (userName: string, password: string): Observable<LoginResponse> {

    const user = new User();
    user.password = password;
    user.userName = userName;
    return this.http.post<LoginResponse>(this.apiEndpoints["login"], user, this.httpOptions);
  }

  signup (userName: string, password: string, role: number): Observable<SignupResponse> {

    const profile = new Profile();
    profile.password = password;
    profile.userName = userName;
    profile.userRole = role;
    return this.http.post<SignupResponse>(this.apiEndpoints["signup"], profile, this.httpOptions);
  }

}

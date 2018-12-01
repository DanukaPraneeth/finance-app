import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginResponse, Profile, User, SignupResponse} from "../models/data-models";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable()
export class LoginRemoteDataService {

  private apiContext = "api";

  private apiEndpoints: Object = {
    login: this.apiContext + "/authentication/login",
    logout: this.apiContext + "/authentication/logout",
    signup: this.apiContext + "/authentication/signup",
    getUserDetails: this.apiContext + "/authentication/userdetails"
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
    profile.role = role;
    return this.http.post<SignupResponse>(this.apiEndpoints["signup"], profile, this.httpOptions);
  }

}

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginResponse, Profile, User, SignupResponse, UserRole} from "../models/data-models";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable()
export class LoginRemoteDataService {


  userNamesObservable: Observable<string[]>;
  userRolesObservable: Observable<UserRole[]>;


  private url = new URL(window.location.href);
  private apiContext = this.url.protocol + '//' + this.url.host + '/finance';

  private apiEndpoints: Object = {
    login: this.apiContext + "/staff/login",
    signup: this.apiContext + "/staff/signup",
    userNames: this.apiContext + "/staff/usernames",
    userRoles: this.apiContext + "/roles/all"
  };

  private httpOptions = {
  headers: new HttpHeaders({
    "Content-Type":  "application/json",
  })
};

  constructor(private http: HttpClient) {
  }

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

  getAllUserNames() {
    this.userNamesObservable = this.http.get<string[]>(
        this.apiEndpoints['userNames'], this.httpOptions
    )
    return this.userNamesObservable;
  }

  getAllRoles() {
    this.userRolesObservable = this.http.get<UserRole[]>(
        this.apiEndpoints['userRoles'], this.httpOptions
    )
    return this.userRolesObservable;
  }

}

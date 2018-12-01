import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  isSubmitted: boolean;

  constructor(private _authenticationService: AuthenticationService, private _router: Router) { }

  ngOnInit() {
  }

  onLoginClick(loginForm) {
    this.isSubmitted = true;
    if (loginForm.valid) {
      this._authenticationService.login(this.userName, this.password);
    }

  }

  onSignUpClick(){
    this._router.navigate(["signup"]);
  }

}

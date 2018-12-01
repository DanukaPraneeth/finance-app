import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    userName: string;
    password: string;
    repeatpassword: string;
    selectedRole: string;
    roleValue: number;

    isInvalidRole: boolean;
    isPasswordError: boolean;
    isRepeatPasswordError: boolean;
    isUsernameError: boolean;
    isPasswordWarning: boolean;

    passworError: string;
    passwordWarning: string
    repeatPasswordError: string;
    usernameError: string;

    roles: string [] = ["", "admin", "clerk", "other"];

    constructor(private _authenticationService: AuthenticationService, private _router: Router) {
    }

    ngOnInit() {
        this.selectedRole = "";
        this.isInvalidRole = false;
        this.userName = "";
        this.password = "";
        this.repeatpassword = "";
    }

    onSignUpClick(signupForm) {
        if (this.checkBeforeSignup()) {
            if (this.password == this.repeatpassword) {
                this._authenticationService.signup(this.userName, this.password, this.roleValue);
            }
        }
    }

    checkBeforeSignup(){
        this.errorPwd(this.password);
        this.matchPwd(this.repeatpassword);
        this.uniqueUsername(this.userName);

        if(!this.isRepeatPasswordError && !this.isPasswordError && !this.isUsernameError && !this.isInvalidRole){
            return true;
        }else {
            if(this.selectedRole == ""){
               this.isInvalidRole = true;
            }
            return false;
        }
    }

    errorPwd(pwd) {
        this.isPasswordError = false;
        this.isPasswordWarning = false;

        if (pwd.length == 0) {
            this.isPasswordError = true;
            this.passworError = "Password cannot be empty";
        } else if ( (0 < pwd.length) && (pwd.length < 8)) {
            this.passwordWarning = "Not a strong password";
            this.isPasswordWarning = true;
        } else {
            this.isPasswordError = false;
            this.isPasswordWarning = false;
        }
    }

    matchPwd(pwd) {
        this.isRepeatPasswordError = false;
        if (pwd != this.password) {
            this.isRepeatPasswordError = true;
            this.repeatPasswordError = "Not matching";
        }
    }


    uniqueUsername(username) {
        if (username.length == 0) {
            this.isUsernameError = true;
            this.usernameError = "User name can not be empty";
        } else if (username.length > 45) {
            this.isUsernameError = true;
            this.usernameError = "Ony 45 Characters Allowed";
        } else {
            this.isUsernameError = false;
            this.usernameError = '';
        }
    }

    onRoleSelected(event) {
        this.selectedRole = event.target.value;
        this.isInvalidRole = false;

        switch (this.selectedRole) {
            case "admin": {
                this.roleValue = 1;
                break;
            }
            case "clerk": {
                this.roleValue = 1;
                break;
            }
            case "other": {
                this.roleValue = 1;
                break;
            }
            default: {
                this.isInvalidRole = true;
                break;
            }
        }
    }

    loginClick() {
        this._router.navigate(["login"]);
    }

}

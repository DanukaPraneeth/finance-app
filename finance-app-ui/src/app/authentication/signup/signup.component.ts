import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {UserRole} from "../../models/data-models";
import {forEach} from "@angular/router/src/utils/collection";
import {thLocale} from "ngx-bootstrap";

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

    passwordError: string;
    passwordWarning: string
    repeatPasswordError: string;
    usernameError: string;

    availableUserNames: string[];
    availableUserRoles: UserRole[]

    // roles: string [] = ["", "admin", "clerk", "other"];

    constructor(private _authenticationService: AuthenticationService, private _router: Router) {
    }

    ngOnInit() {
        this.selectedRole = "";
        this.isInvalidRole = false;
        this.userName = "";
        this.password = "";
        this.repeatpassword = "";
        this.getAllUserNames();
        this.getAllRoles();
    }

    onSignUpClick(signupForm) {
        if (this.checkBeforeSignup()) {
            if (this.password == this.repeatpassword) {
                console.log('$'+ this.roleValue + '$')
                this._authenticationService.signup(this.userName, this.password, this.roleValue);
            }
        }
    }

    checkBeforeSignup() {
        this.errorPwd(this.password);
        this.matchPwd(this.repeatpassword);
        this.uniqueUsername(this.userName);

        if (!this.isRepeatPasswordError && !this.isPasswordError && !this.isUsernameError && !this.isInvalidRole) {
            return true;
        } else {
            if (this.selectedRole == "") {
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
            this.passwordError = "Password cannot be empty";
        } else if ((0 < pwd.length) && (pwd.length < 8)) {
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
        if (username.length === 0) {
            this.isUsernameError = true;
            this.usernameError = "User name can not be empty";
        } else if (username.length > 45) {
            this.isUsernameError = true;
            this.usernameError = "Ony 45 Characters Allowed";
        } else if (!this.isUniqueUsername(username)) {
            this.isUsernameError = true;
            this.usernameError = "User name already exists, please use another name";
        } else {
            this.isUsernameError = false;
            this.usernameError = '';
        }
    }

    onRoleSelected(event) {
        this.selectedRole = event.target.value;
        this.isInvalidRole = false;

        for (const role of this.availableUserRoles) {
            if (role.roleName === this.selectedRole) {
                this.roleValue = role.roleId;
                return;
            }
        }

        this.isInvalidRole = true;

        // switch (this.selectedRole) {
        //     case "admin": {
        //         this.roleValue = 1;
        //         break;
        //     }
        //     case "clerk": {
        //         this.roleValue = 2;
        //         break;
        //     }
        //     case "other": {
        //         this.roleValue = 3;
        //         break;
        //     }
        //     default: {
        //         this.isInvalidRole = true;
        //         break;
        //     }
        // }
    }

    loginClick() {
        this._router.navigate(["login"]);
    }

    private getAllUserNames() {
        this._authenticationService.getAllUserNames((response) => {
            if (response.length != 0) {
                this.availableUserNames = response;
            } else {
                this.availableUserNames = [];
            }
        });
    }

    private getAllRoles() {
        this._authenticationService.getAllRoles((response) => {
            if (response.length != 0) {
                this.availableUserRoles = response;
                console.log(JSON.stringify(this.availableUserRoles));
            } else {
                this.availableUserRoles = [];
            }
        });
    }

    private isUniqueUsername(username: string): boolean {
        for (const item of this.availableUserNames) {
            if (username === item) {
                return false;
            }
        }
        return true;
    }

}

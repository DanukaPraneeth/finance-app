import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {LoginResponse} from "./models/data-models";
import {AppCommonService} from "./services/app-common.service";

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styles: [`:host {
    background-color: blue
  }`],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'record-platform';

  private isLoggedIn = false;
  private isMenuExpanded = false;

  constructor(private _authenticationService: AuthenticationService, private _appCommonService: AppCommonService) {

  }

  ngOnInit() {
    this.isLoggedIn = this._authenticationService.isLoggedIn();
    this._authenticationService.loginUserInfo.subscribe((userInfo: LoginResponse) => {
      this.isLoggedIn = !!userInfo;
    });
    this._appCommonService.menuToggleStream.subscribe((isExpand: boolean) => this.isMenuExpanded = isExpand);
  }
}

import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isEnabled: boolean;

  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isEnabled = false;
  }

  onLogoutClick() {
    this._authenticationService.doLogout();
  }
}

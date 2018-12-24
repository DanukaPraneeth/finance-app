import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {Certify} from "../models/data-models";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isEnabled: boolean;

  simpleBill: Certify;

  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isEnabled = false;
    this.simpleBill = new Certify();
    this.simpleBill.type = "Electricity";
    this.simpleBill.color = "green";
    this.simpleBill.route = "bill/view";
    this.simpleBill.icon = "ev_station";
    this.simpleBill.pendingCertifcations = 10;
  }

  onLogoutClick() {
    this._authenticationService.doLogout();
  }
}

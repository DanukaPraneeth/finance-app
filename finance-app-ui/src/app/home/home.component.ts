import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {Certify, PendingCertification} from "../models/data-models";
import {DashboardService} from "../services/dashboard.service";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    isEnabled: boolean;

    certifications: Certify[];

    pendingCertifications: PendingCertification[];

    constructor(private _authenticationService: AuthenticationService, private _dashboardService: DashboardService) {
    }

    ngOnInit() {
        this.isEnabled = false;
        this.certifications = [];
        this.getPendingCertifications();
    }

    onLogoutClick() {
        this._authenticationService.doLogout();
    }

    private getPendingCertifications() {
        this._dashboardService.getPendingCertifiactions((response) => {
            if (response.length != 0) {
                this.pendingCertifications = response;

                for (const item of this.pendingCertifications) {
                    this.certifications.push(this.createBill(item));
                }
            } else {
                console.log("Unsuccessfull request");
            }
        });
    }

    createBill(pendingCertfication: PendingCertification): Certify {
        const bill = new Certify();
        switch (pendingCertfication.billType) {
            case "electricity": {
                bill.type = "Electricity";
                bill.color = "green";
                bill.route = "bill/show/electricity";
                bill.icon = "ev_station";
                bill.pendingCertifcations = pendingCertfication.count;
                break;
            }
            case "internet": {
                bill.type = "Internet";
                bill.color = "green";
                bill.route = "bill/show/internet";
                bill.icon = "ev_station";
                bill.pendingCertifcations = pendingCertfication.count;
                break;
            }

            case "telephone": {
                bill.type = "Telephone";
                bill.color = "green";
                bill.route = "bill/show/telephone";
                bill.icon = "ev_station";
                bill.pendingCertifcations = pendingCertfication.count;
                break;
            }

            default: {
                bill.type = "Other";
                bill.color = "green";
                bill.route = "bill/show/other";
                bill.icon = "ev_station";
                bill.pendingCertifcations = pendingCertfication.count;
                break;
            }
        }

        return bill;
    }
}

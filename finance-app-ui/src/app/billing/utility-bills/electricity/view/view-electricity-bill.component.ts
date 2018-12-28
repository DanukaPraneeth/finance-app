import {Component, OnInit, TemplateRef} from "@angular/core";
import {ElectricityBill} from "../../../../models/data-models";
import {ElectricityBillsService} from "../../../../services/electricity-bill.service";
import {Router} from "@angular/router";

@Component({
    selector: "app-view-electricity-bill",
    templateUrl: "./view-electricity-bill.component.html",
    styleUrls: ["./view-electricity-bill.component.scss"]
})
export class ViewElectricityBillComponent implements OnInit {


    fieldSet: string [] = ["Date", "Bill Number", "Previous Reading", "Current Reading", "No. of Units", "Amount", "Location", "Certification",""];
    electrictyBillList: ElectricityBill [];
    private modalTitle: string;
    private showUpdateBill: boolean;
    private changingBill: ElectricityBill;
    private showCertifyBill: boolean;


    constructor(private _electrictyBillService: ElectricityBillsService, private _router: Router) {
    }

    ngOnInit() {
        this.electrictyBillList = [];
        this.getElectrictyBills();
        this.showUpdateBill = false;
        this.showCertifyBill = false;
    }

    private getElectrictyBills() {
        this._electrictyBillService.getElectricityBills((response) => {
            console.log(response.length);
            if (response.length != 0) {
                this.electrictyBillList = response;
            } else {
                console.log("Unsuccessfull request");
            }
        });
    }

    changeDialogTitle() {
        this.changingBill.period = "November 2018";
        return this.modalTitle = "Update an Electricity Bill";
    }

    changeHeading() {
        return this.modalTitle = "Certify Electricity Bill";
    }

    clearModalContent() {
        this.showUpdateBill = false;
        this.showCertifyBill = false;
    }

    onUpdateBillHandler(event: boolean) {
        if (event) {
            this.getElectrictyBills();
        }
    }
}

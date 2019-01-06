import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {InternetBill} from "../../../../models/data-models";
import {InternetBillsService} from "../../../../services/internet-bill.service";
import {Router} from "@angular/router";

@Component({
    selector: "app-update-internet-bill",
    templateUrl: "./update-internet-bill.component.html",
    styleUrls: ["./update-internet-bill.component.scss"]
})
export class UpdateInternetBillComponent implements OnInit {

    isAccountNoError: boolean;
    isPeriodError: boolean;
    isAmountError: boolean;
    isLocationError: boolean;

    accountNoError: string;
    amountError: string;
    locationError: string;
    periodError: string;

    @Input()
    internetBill: InternetBill;
    private disableAddButton: boolean;

    @Output()
    private onUpdateTask: EventEmitter<boolean> = new EventEmitter();

    constructor(private internetBillsService: InternetBillsService, private _router: Router) {
    }

    ngOnInit() {
        this.disableAddButton = false;
    }

    ngAfterViewChecked() {
        console.log("After view loaded : " + this.internetBill.id);
    }

    onSubmition(billForm) {
//when form is submitted
        if (this.internetBill.billId != null && this.internetBill.billId != "" &&
            this.internetBill.location != null && this.internetBill.location != "" &&
            this.internetBill.amount != null &&
            this.internetBill.location != null && this.internetBill.location != "") {

            // this.internetBill.certifiedDate = "2018-01-03 00:00:00.0";
            // this.internetBill.userKey = 1;
            // this.internetBill.traineeStaffId = 1;
            // this.internetBill.certification = "approved";
            this.internetBillsService.updateInternetBill(this.internetBill);
            this.onUpdateTask.emit(true);
        } else {
            if (this.internetBill.billId.length == 0) {
                this.isAccountNoError = true;
                this.accountNoError = "Bill No cannot be empty"
            } else {
                this.isAccountNoError = false;
            }
            if (this.internetBill.period.length == 0) {
                this.isPeriodError = true;
                this.periodError = "Period cannot be empty"
            } else {
                this.isPeriodError = false;
            }
            if (this.internetBill.amount == null) {
                this.isAmountError = true;
                this.amountError = "Amount cannot be empty"
            } else {
                this.isAmountError = false;
            }
            if (this.internetBill.location.length == 0) {
                this.isLocationError = true;
                this.locationError = "Bill No cannot be empty"
            } else {
                this.isLocationError = false;
            }
            this.disableAddButton = false;

        }

    }

    isAccountNoValid(accoutNo) {
//when the accout no is ented do the acount no check.
        //shold be a no in the database
        if (accoutNo.length == 0) {
            this.isAccountNoError = true;
            this.accountNoError = 'Bill no can not be empty';
        } else {
            this.isAccountNoError = false;
            this.accountNoError = '';
        }
    }

    isPeriodValid(period) {
        //shold be a no in the database
        if (period.length == 0) {
            this.isPeriodError = true;
            this.periodError = 'Period can not be empty';
        } else {
            this.isPeriodError = false;
            this.periodError = '';
        }

    }

    isAmountValid(amount) {
        //shold be a no in the database
        if (amount.length == 0) {
            this.isAmountError = true;
            this.amountError = 'Amount can not be empty';
        } else {
            this.isAmountError = false;
            this.amountError = '';
        }
    }

    isLocationValid(location) {
        //shold be a no in the database
        if (location.length == 0) {
            this.isLocationError = true;
            this.locationError = 'Location can not be empty';
        } else {
            this.isLocationError = false;
            this.locationError = '';
        }
    }

    reloadPage() {
    }

    private clearForm() {
        this.internetBill.amount = null;
        this.internetBill.location = '';
        this.internetBill.period = '';
        this.internetBill.billId = '';
        this.clearErrors();
    }

    private clearErrors() {
        this.isAccountNoError = false;
        this.isPeriodError = false;
        this.isAmountError = false;
        this.isLocationError = false;
        this.accountNoError = "";
        this.periodError = "";
        this.accountNoError = "";
        this.locationError = "";
    }

}

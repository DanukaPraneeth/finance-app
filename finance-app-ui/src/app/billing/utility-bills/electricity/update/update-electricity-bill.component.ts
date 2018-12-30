import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ElectricityBill} from "../../../../models/data-models";
import {ElectricityBillsService} from "../../../../services/electricity-bill.service";
import {Router} from "@angular/router";

@Component({
    selector: "app-update-electricity-bill",
    templateUrl: "./update-electricity-bill.component.html",
    styleUrls: ["./update-electricity-bill.component.scss"]
})
export class UpdateElectricityBillComponent implements OnInit {

    isAccountNoError: boolean;
    isPeriodError: boolean;
    isPreviousReadingError: boolean;
    isCurrentReadingError: boolean;
    isNoOfUnitsError: boolean;
    isAmountError: boolean;
    isLocationError: boolean;

    accountNoError: string;
    previousReadingError: string;
    currentReadingError: string;
    noOfUnitsError: string;
    amountError: string;
    locationError: string;
    periodError: string;

    @Input()
    electricityBill: ElectricityBill;
    private disableAddButton: boolean;

    @Output()
    private onUpdateTask: EventEmitter<boolean> = new EventEmitter();

    constructor(private electricityBillsService: ElectricityBillsService, private _router: Router) {
    }

    ngOnInit() {
        this.disableAddButton = false;
    }

    ngAfterViewChecked() {
        console.log("After view loaded : " + this.electricityBill.id);
    }

    onSubmition(billForm) {
//when form is submitted
        if (this.electricityBill.billNo != null && this.electricityBill.billNo != "" &&
            this.electricityBill.location != null && this.electricityBill.location != "" &&
            this.electricityBill.previousReading != null &&
            this.electricityBill.currentReading != null &&
            this.electricityBill.noOfUnits != null &&
            this.electricityBill.amount != null &&
            this.electricityBill.location != null && this.electricityBill.location != "") {

            this.electricityBillsService.updateElectricityBill(this.electricityBill);
            this.onUpdateTask.emit(true);
        } else {
            if (this.electricityBill.billNo.length == 0) {
                this.isAccountNoError = true;
                this.accountNoError = "Bill No cannot be empty"
            } else {
                this.isAccountNoError = false;
            }
            if (this.electricityBill.period.length == 0) {
                this.isPeriodError = true;
                this.periodError = "Period cannot be empty"
            } else {
                this.isPeriodError = false;
            }
            if (this.electricityBill.previousReading == null) {
                this.isPreviousReadingError = true;
                this.previousReadingError = "Previous Reading cannot be empty"
            } else {
                this.isPreviousReadingError = false;
            }
            if (this.electricityBill.currentReading == null) {
                this.isCurrentReadingError = true;
                this.currentReadingError = "Current Reading cannot be empty"
            } else {
                this.isCurrentReadingError = false;
            }
            if (this.electricityBill.noOfUnits == null) {
                this.isNoOfUnitsError = true;
                this.noOfUnitsError = "No of Units cannot be empty"
            } else {
                this.isNoOfUnitsError = false;
            }
            if (this.electricityBill.amount == null) {
                this.isAmountError = true;
                this.amountError = "Amount cannot be empty"
            } else {
                this.isAmountError = false;
            }
            if (this.electricityBill.location.length == 0) {
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

    isPreviousReadingValid(previousReading) {
        //shold be a no in the database
        if (previousReading.length == 0) {
            this.isPreviousReadingError = true;
            this.previousReadingError = 'Previous Reading can not be empty';
        } else {
            this.isPreviousReadingError = false;
            this.previousReadingError = '';
        }
    }

    isCurrentReadingValid(currentReading) {
        //shold be a no in the database
        if (currentReading.length == 0) {
            this.isCurrentReadingError = true;
            this.currentReadingError = 'Current Reading can not be empty';
        } else {
            this.isCurrentReadingError = false;
            this.currentReadingError = '';
        }
    }

    isNoOfUnitsValid(noOfUnits) {
        //shold be a no in the database
        if (noOfUnits.length == 0) {
            this.isNoOfUnitsError = true;
            this.noOfUnitsError = 'No of Units can not be empty';
        } else {
            this.isNoOfUnitsError = false;
            this.noOfUnitsError = '';
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
        this.electricityBill.amount = null;
        this.electricityBill.currentReading = null;
        this.electricityBill.previousReading = null;
        this.electricityBill.location = '';
        this.electricityBill.period = '';
        this.electricityBill.noOfUnits = null;
        this.electricityBill.billNo = '';
        this.clearErrors();
    }

    private clearErrors() {
        this.isAccountNoError = false;
        this.isPeriodError = false;
        this.isPreviousReadingError = false;
        this.isCurrentReadingError = false;
        this.isNoOfUnitsError = false;
        this.isAmountError = false;
        this.isLocationError = false;
        this.accountNoError = "";
        this.periodError = "";
        this.previousReadingError = "";
        this.currentReadingError = "";
        this.noOfUnitsError = "";
        this.accountNoError = "";
        this.locationError = "";
    }
}

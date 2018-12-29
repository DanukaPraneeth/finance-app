import { Component, OnInit } from "@angular/core";
import {WaterBill} from "../../../../models/data-models";

@Component({
  selector: "app-create-water-bill",
  templateUrl: "./create-water-bill.component.html",
  styleUrls: ["./create-water-bill.component.scss"]
})
export class CreateWaterBillComponent implements OnInit {

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

    private waterBill: WaterBill;

  constructor() {
    this.waterBill = new WaterBill();
  }

  ngOnInit() {

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

}

import { Component, OnInit } from "@angular/core";
import {TelephoneBill} from "../../../../models/data-models";

@Component({
  selector: "app-create-telephone-bill",
  templateUrl: "./create-telephone-bill.component.html",
  styleUrls: ["./create-telephone-bill.component.scss"]
})
export class CreateTelephoneBillComponent implements OnInit {

  model;

  isAccountNoError: boolean;
    isPeriodError: boolean;
    isCategoryError: boolean;
    isAmountError: boolean;
    isLocationError: boolean;

    accountNoError: string;
    categoryError: string;
    amountError: string;
    locationError: string;
    periodError: string;

    private telephoneBill: TelephoneBill;

  constructor() {
    this.telephoneBill = new TelephoneBill();
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


    isCategoryValid(category) {
        //shold be a no in the database
        if (category.length == 0) {
            this.isCategoryError = true;
            this.categoryError = 'Category can not be empty';
        } else {
            this.isCategoryError = false;
            this.categoryError = '';
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

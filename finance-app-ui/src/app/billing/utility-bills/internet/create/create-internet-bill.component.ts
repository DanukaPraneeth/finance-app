import { Component, OnInit } from "@angular/core";
import {InternetBill} from "../../../../models/data-models";
import {InternetBillsService} from "../../../../services/internet-bill.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-create-internet-bill",
  templateUrl: "./create-internet-bill.component.html",
  styleUrls: ["./create-internet-bill.component.scss"]
})
export class CreateInternetBillComponent implements OnInit {

  model;

  isAccountNoError: boolean;
    isPeriodError: boolean;
    isAmountError: boolean;
    isLocationError: boolean;

    accountNoError: string;
    amountError: string;
    locationError: string;
    periodError: string;

    private internetBill: InternetBill;
    private disableAddButton: boolean;

  constructor(private internetBillsService: InternetBillsService, private _router: Router) {

  }

  ngOnInit() {
      this.internetBill = new InternetBill();
      this.clearForm();
      this.disableAddButton = false;
  }

    onSubmition(internetBillForm) {
//when form is submitted
        if (this.internetBill.billNo != null && this.internetBill.billNo != "" &&
            this.internetBill.location != null && this.internetBill.location != "" &&
            this.internetBill.amount != null &&
            this.internetBill.location != null && this.internetBill.location != "") {

            this.internetBill.traineeStaffId = 1;
            this.internetBillsService.insertInternetBill(this.internetBill);
        }else {
            if (this.internetBill.billNo.length == 0){
                this.isAccountNoError = true;
                this.accountNoError = "Bill No cannot be empty"
            }else{
                this.isAccountNoError = false;
            }
            if (this.internetBill.period.length == 0){
                this.isPeriodError = true;
                this.periodError = "Period cannot be empty"
            }else{
                this.isPeriodError = false;
            }
            if (this.internetBill.amount == null){
                this.isAmountError = true;
                this.amountError = "Amount cannot be empty"
            }else{
                this.isAmountError = false;
            }
            if (this.internetBill.location.length == 0){
                this.isLocationError = true;
                this.locationError = "Bill No cannot be empty"
            }else{
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

    private clearForm() {
        this.internetBill.amount = null;
        this.internetBill.location = '';
        this.internetBill.period = '';
        this.internetBill.billNo = '';
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

import { Component, OnInit } from "@angular/core";
import {TelephoneBill} from "../../../../models/data-models";
import {TelephoneBillsService} from "../../../../services/telephone-bill.service";
import {Router} from "@angular/router";

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
    private disableAddButton: boolean;

  constructor(private telephoneBillsService: TelephoneBillsService, private _router: Router) {

  }

  ngOnInit() {
      this.telephoneBill = new TelephoneBill();
      this.clearForm();
      this.disableAddButton = false;
  }

    onSubmition(telephoneBillForm) {
//when form is submitted
        if (this.telephoneBill.billId != null && this.telephoneBill.billId != "" &&
            this.telephoneBill.location != null && this.telephoneBill.location != "" &&
            this.telephoneBill.category != null && this.telephoneBill.category != "" &&
            this.telephoneBill.amount != null &&
            this.telephoneBill.location != null && this.telephoneBill.location != "") {

            this.telephoneBill.traineeStaffId = 1;
            this.telephoneBillsService.insertTelephoneBill(this.telephoneBill);
        }else {
            if (this.telephoneBill.billId.length == 0){
                this.isAccountNoError = true;
                this.accountNoError = "Bill No cannot be empty"
            }else{
                this.isAccountNoError = false;
            }
            if (this.telephoneBill.period.length == 0){
                this.isPeriodError = true;
                this.periodError = "Period cannot be empty"
            }else{
                this.isPeriodError = false;
            }
            if (this.telephoneBill.category.length == 0) {
                this.isCategoryError = true;
                this.categoryError = "Category cannot be empty"
            } else {
                this.isCategoryError = false;
            }
            if (this.telephoneBill.amount == null){
                this.isAmountError = true;
                this.amountError = "Amount cannot be empty"
            }else{
                this.isAmountError = false;
            }
            if (this.telephoneBill.location.length == 0){
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

    private clearForm() {
        this.telephoneBill.amount = null;
        this.telephoneBill.location = '';
        this.telephoneBill.period = '';
        this.telephoneBill.category = '';
        this.telephoneBill.billId = '';
        this.clearErrors();
    }

    private clearErrors() {
        this.isAccountNoError = false;
        this.isPeriodError = false;
        this.isCategoryError = false;
        this.isAmountError = false;
        this.isLocationError = false;
        this.accountNoError = "";
        this.periodError = "";
        this.categoryError = "";
        this.accountNoError = "";
        this.locationError = "";
    }

}

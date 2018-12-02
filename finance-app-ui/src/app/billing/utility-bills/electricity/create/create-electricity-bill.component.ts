import {Component, OnInit} from "@angular/core";
import {ElectricityBill} from "../../../../models/data-models";
import {ElectricityBillsService} from "../../../../services/electricity-bill.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-create-electricity-bill",
  templateUrl: "./create-electricity-bill.component.html",
  styleUrls: ["./create-electricity-bill.component.scss"]
})
export class CreateElectricityBillComponent implements OnInit {


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

  private electricityBill: ElectricityBill;


  constructor(private electricityBillsService: ElectricityBillsService, private _router: Router) {
  }

  ngOnInit() {
    this.electricityBill = new ElectricityBill();
    this.clearForm();
    //this.electricityBill.noOfUnits = this.getNoOfUnits();
  }

  onSubmition(billForm) {
//when form is submitted
    this.electricityBill.certifiedDate = "2018-01-03 00:00:00.0";
    this.electricityBill.userKey = 1;
    this.electricityBill.traineeStaffId = 1;
    this.electricityBill.certification = "approved";
    this.electricityBillsService.insertElectricityBill(this.electricityBill);
  }

  isAccountNoValid(accoutNo) {
//when the accout no is ented do the acount no check.
    //shold be a no in the database
  }

  isPeriodValid(period) {

  }

  isPreviousReadingValid(previousReading){}
  isCurrentReadingValid(currentReading){}
  isNoOfUnitsValid(noOfUnits){}
  isAmountValid(amount){}
  isLocationValid(location){}
  reloadPage(){}

  getNoOfUnits(){
    return this.electricityBill.noOfUnits = this.electricityBill.currentReading - this.electricityBill.previousReading;
  }


  private clearForm() {
    this.electricityBill.amount = 0;
    this.electricityBill.currentReading = 0;
    this.electricityBill.previousReading = 0;
    this.electricityBill.location = '';
    this.electricityBill.period = '';
    this.electricityBill.noOfUnits = 0;
    this.electricityBill.billNo = '';
  }

}

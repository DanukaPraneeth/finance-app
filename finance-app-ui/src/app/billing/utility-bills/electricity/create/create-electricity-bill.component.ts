import {Component, OnInit} from "@angular/core";

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



  previousReading: number;
  currentReading: number;
  noOfUnits: number;
  amount: number;
  location: string;
  period: number;
  accountNo: string;




  constructor() {
  }

  ngOnInit() {

  }

  onSubmition(billForm) {
//when form is submitted
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



}

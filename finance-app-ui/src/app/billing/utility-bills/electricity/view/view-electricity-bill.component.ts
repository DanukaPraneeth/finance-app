import {Component, OnInit} from "@angular/core";
import {ElectricityBill} from "../../../../models/data-models";

@Component({
  selector: "app-view-electricity-bill",
  templateUrl: "./view-electricity-bill.component.html",
  styleUrls: ["./view-electricity-bill.component.scss"]
})
export class ViewElectricityBillComponent implements OnInit {


  fieldSet: string [] = ["Date", "Period", "Previous Reading", "Current Reading", "No. of Units", "Amount", "Certification"];
  dataSource: ElectricityBill [];

  constructor() {
  }

  ngOnInit() {
    this.dataSource = [];
  }

}

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


  fieldSet: string [] = ["Date", "Bill Number", "Previous Reading", "Current Reading", "No. of Units", "Amount", "Location", "Certification"];
  electrictyBillList: ElectricityBill [];
  private dialogactionTitle: string;
  private showUpdateBill: boolean;
  private changingBill: ElectricityBill;

  constructor(private _electrictyBillService: ElectricityBillsService, private _router: Router) {
  }

  ngOnInit() {
    this.electrictyBillList = [];
    this.getElectrictyBills();
    this.showUpdateBill = false;
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
        return this.dialogactionTitle = 'Update an Electricity Bill';
        }

    clearModalContent() {
        this.showUpdateBill = false;
    }
}

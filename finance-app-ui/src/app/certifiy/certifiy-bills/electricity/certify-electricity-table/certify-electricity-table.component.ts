import {Component, OnInit, TemplateRef} from "@angular/core";
import {ElectricityBill} from "../../../../models/data-models";
import {ElectricityBillsService} from "../../../../services/electricity-bill.service";
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap";
import {CertifyElectricityComponent} from "../certify-electricity/certify-electricity.component";

@Component({
  selector: "app-certify-electricity-table",
  templateUrl: "./certify-electricity-table.component.html",
  styleUrls: ["./certify-electricity-table.component.scss"]
})
export class CertifyElectricityTableComponent implements OnInit {

  fieldSet: string [] = ["Date", "Bill Number", "Previous Reading", "Current Reading", "No. of Units", "Amount", "Location", "Certification", "Action"];
  electrictyBillList: ElectricityBill [];
  modalRef: BsModalRef;
  bill: ElectricityBill;

  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };

  constructor(private _electrictyBillService: ElectricityBillsService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.electrictyBillList = [];
    this.getElectrictyBills();
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

  private loadModal($event) {

  }

  openModal(template: TemplateRef<any>, item) {
    this.bill = item;
    this.modalRef = this.modalService.show(template, <ModalOptions>this.config);
  }

  approve(){
    this.modalRef.hide();
  }

  reject(){
    this.modalRef.hide();
  }
}

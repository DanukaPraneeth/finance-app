import {Component, Input, OnInit} from "@angular/core";
import {BillToApprove, TelephoneBill} from "../../../../models/data-models";
import {ApprovalService} from "../../../../services/approval.service";

@Component({
    selector: "app-certify-telephone-bill",
    templateUrl: "./certify-telephone-bill.component.html",
    styleUrls: ["./certify-telephone-bill.component.scss"]
})
export class CertifyTelephoneBillComponent implements OnInit {


    @Input()
    bill: TelephoneBill;

    constructor(private _approvalService: ApprovalService) {
    }

    ngOnInit() {
    }

    approve() {
        const approvedBill = new BillToApprove();
        approvedBill.billType = "telephonebill";
        approvedBill.status = "approved";
        approvedBill.comment = "approved successfully";
        approvedBill.billId = this.bill.billId;
        approvedBill.userId = 1;
        this._approvalService.approveBill(approvedBill);
    }

    reject() {
        const approvedBill = new BillToApprove();
        approvedBill.billType = "telephonebill";
        approvedBill.status = "rejected";
        approvedBill.comment = "rejected the bill";
        approvedBill.billId = this.bill.billId;
        approvedBill.userId = 1;
        this._approvalService.approveBill(approvedBill);
    }

}

import {Component, Input, OnInit} from "@angular/core";
import {BillToApprove, WaterBill} from "../../../../models/data-models";
import {ApprovalService} from "../../../../services/approval.service";

@Component({
    selector: "app-certify-water-bill",
    templateUrl: "./certify-water-bill.component.html",
    styleUrls: ["./certify-water-bill.component.scss"]
})
export class CertifyWaterBillComponent implements OnInit {


    @Input()
    bill: WaterBill;

    constructor(private _approvalService: ApprovalService) {
    }

    ngOnInit() {
    }

    approve() {
        const approvedBill = new BillToApprove();
        approvedBill.billType = "waterbill";
        approvedBill.status = "approved";
        approvedBill.comment = "approved successfully";
        approvedBill.billId = this.bill.billNo;
        approvedBill.userId = 1;
        this._approvalService.approveBill(approvedBill);
    }

    reject() {
        const approvedBill = new BillToApprove();
        approvedBill.billType = "waterbill";
        approvedBill.status = "rejected";
        approvedBill.comment = "rejected the bill";
        approvedBill.billId = this.bill.billNo;
        approvedBill.userId = 1;
        this._approvalService.approveBill(approvedBill);
    }

}

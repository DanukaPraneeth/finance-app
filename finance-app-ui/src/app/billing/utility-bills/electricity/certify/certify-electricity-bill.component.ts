import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {BillToApprove, ElectricityBill} from "../../../../models/data-models";
import {ApprovalService} from "../../../../services/approval.service";
import {Router} from "@angular/router";
import {MessageService} from "../../../../services/message.service";

@Component({
    selector: "app-certify-electricity-bill",
    templateUrl: "./certify-electricity-bill.component.html",
    styleUrls: ["./certify-electricity-bill.component.scss"]
})
export class CertifyElectricityBillComponent implements OnInit {


    @Input()
    bill: ElectricityBill;

    @Output()
    private modalClose: EventEmitter<boolean> = new EventEmitter();

    constructor(private _router: Router, private _approvalService: ApprovalService, private message: MessageService) {
    }

    ngOnInit() {
    }

    approve() {
        const approvedBill = new BillToApprove();
        approvedBill.billType = "electricitybill";
        approvedBill.status = "approved";
        approvedBill.comment = "approved successfully";
        approvedBill.billId = this.bill.billNo;
        approvedBill.userId = 1;
        this._approvalService.approveBill(approvedBill, (response) => {
            if (response.success) {
                this._router.navigate(["bill/show/electricity"]);
                this.modalClose.emit(true);
                // this.message.success(response.message);
            } else {
                // this.message.error(response.message);
            }
        });
    }

    reject() {
        const approvedBill = new BillToApprove();
        approvedBill.billType = "electricitybill";
        approvedBill.status = "rejected";
        approvedBill.comment = "rejected the bill";
        approvedBill.billId = this.bill.billNo;
        approvedBill.userId = 1;
        this._approvalService.approveBill(approvedBill, (response) => {
            if (response.success) {
                this._router.navigate(["bill/show/electricity"]);
                this.modalClose.emit(true);
                // this.message.success(response.message);
            } else {
                // this.message.error(response.message);
            }
        });
    }

}

import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {BillToApprove, TelephoneBill} from "../../../../models/data-models";
import {ApprovalService} from "../../../../services/approval.service";
import {Router} from "@angular/router";
import {MessageService} from "../../../../services/message.service";

@Component({
    selector: "app-certify-telephone-bill",
    templateUrl: "./certify-telephone-bill.component.html",
    styleUrls: ["./certify-telephone-bill.component.scss"]
})
export class CertifyTelephoneBillComponent implements OnInit {


    @Input()
    bill: TelephoneBill;

    @Output()
    private modalClose: EventEmitter<boolean> = new EventEmitter();

    constructor(private _router: Router, private _approvalService: ApprovalService, private message: MessageService) {
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
        this._approvalService.approveBill(approvedBill, (response) => {
            if (response.success) {
                this._router.navigate(["bill/show/telephone"]);
                this.modalClose.emit(true);
                // this.message.success(response.message);
            } else {
                // this.message.error(response.message);
            }
        });
    }

    reject() {
        const approvedBill = new BillToApprove();
        approvedBill.billType = "telephonebill";
        approvedBill.status = "rejected";
        approvedBill.comment = "rejected the bill";
        approvedBill.billId = this.bill.billId;
        approvedBill.userId = 1;
        this._approvalService.approveBill(approvedBill, (response) => {
            if (response.success) {
                this._router.navigate(["bill/show/telephone"]);
                this.modalClose.emit(true);
                // this.message.success(response.message);
            } else {
                // this.message.error(response.message);
            }
        });
    }

}

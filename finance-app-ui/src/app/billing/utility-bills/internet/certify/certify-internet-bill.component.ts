import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {BillToApprove, ElectricityBill, InternetBill} from "../../../../models/data-models";
import {ApprovalService} from "../../../../services/approval.service";
import {Router} from "@angular/router";
import {MessageService} from "../../../../services/message.service";

@Component({
    selector: "app-certify-internet-bill",
    templateUrl: "./certify-internet-bill.component.html",
    styleUrls: ["./certify-internet-bill.component.scss"]
})
export class CertifyInternetBillComponent implements OnInit {


    @Input()
    bill: InternetBill;

    @Output()
    private modalClose: EventEmitter<boolean> = new EventEmitter();

    constructor(private _router: Router, private _approvalService: ApprovalService, private message: MessageService) {
    }

    ngOnInit() {
    }

    approve() {
        const approvedBill = new BillToApprove();
        approvedBill.billType = "internetbill";
        approvedBill.status = "approved";
        approvedBill.comment = "approved successfully";
        approvedBill.billId = this.bill.billId;
        approvedBill.userId = 1;
        this._approvalService.approveBill(approvedBill, (response) => {
            if (response.success) {
                this._router.navigate(["bill/show/internet"]);
                this.modalClose.emit(true);
                // this.message.success(response.message);
            } else {
                // this.message.error(response.message);
            }
        });
    }

    reject() {
        const approvedBill = new BillToApprove();
        approvedBill.billType = "internetbill";
        approvedBill.status = "rejected";
        approvedBill.comment = "rejected the bill";
        approvedBill.billId = this.bill.billId;
        approvedBill.userId = 1;
        this._approvalService.approveBill(approvedBill, (response) => {
            if (response.success) {
                this._router.navigate(["bill/show/internet"]);
                this.modalClose.emit(true);
                // this.message.success(response.message);
            } else {
                // this.message.error(response.message);
            }
        });
    }

}

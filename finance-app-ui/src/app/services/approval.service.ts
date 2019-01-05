import {Injectable} from "@angular/core";
import {ApprovalResponse, BillToApprove} from "../models/data-models";
import {ApprovalRemoteService} from "../remote/approval-remote.service";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class ApprovalService {

    constructor(private _router: Router, private _remoteService: ApprovalRemoteService) {
    }

    approveBill(bill: BillToApprove) {
        this._remoteService.approveBill(bill)
            .subscribe((data: ApprovalResponse) => {
                if (data.success === true) {
                    this._router.navigate(["bill/show/electricity"]);
                } else {
                }
            });

    }
}

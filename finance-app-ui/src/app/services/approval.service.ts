import {Injectable} from "@angular/core";
import {ApprovalResponse, BillToApprove} from "../models/data-models";
import {ApprovalRemoteService} from "../remote/approval-remote.service";

@Injectable({
    providedIn: 'root'
})
export class ApprovalService {

    constructor(private _remoteService: ApprovalRemoteService) {
    }

    approveBill(bill: BillToApprove, callback: Function) {
        this._remoteService.approveBill(bill)
            .subscribe((data: ApprovalResponse) => {
                if (data.success == true) {
                    console.log("here");
                    const response =  {
                        success: true,
                        message: 'Certified Successfully',
                    };
                    callback(response);
                } else {
                    const response = {
                        success: false,
                        message: 'Error In Certify Process. Retry !!',
                    };
                    callback(response);
                }
            });

    }
}

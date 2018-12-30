import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {TelephoneBillRemoteDataService} from "../remote/telephone_bill_remote.service";
import {CreateBillResponse, TelephoneBill, UpdateBillResponse} from "../models/data-models";


@Injectable()
export class TelephoneBillsService {

    constructor(private _router: Router, private _remoteService: TelephoneBillRemoteDataService) {

    }

    getTelephoneBills(callback: Function) {
        this._remoteService.getTelephoneBills()
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    insertTelephoneBill(telephoneBill: TelephoneBill) {
        this._remoteService.insertTelephoneBill(telephoneBill)
            .subscribe((data: CreateBillResponse) => {
                // if (data["success"] == true) {
                //     this._router.navigate(["home"]);
                // } else {
                //     this._router.navigate(["singnup"]);
                // }
                this._router.navigate(["home"]);
            });

    }

    updateTelephoneBill(telephoneBill: TelephoneBill) {
        this._remoteService.updateTelephoneBill(telephoneBill)
            .subscribe((data: UpdateBillResponse) => {
                // if (data["success"] == true) {
                //     this._router.navigate(["home"]);
                // } else {
                //     this._router.navigate(["singnup"]);
                // }
                this._router.navigate(["viewBill"]);
            });
    }

    getTelephoneBillsByMonth(month: string, callback: Function) {
        this._remoteService.getTelephoneBillsByMonth(month)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getTelephoneBillsByYear(year: string, callback: Function) {
        this._remoteService.getTelephoneBillsByYear(year)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getTelephoneBillsByPeriod(year: string, month: string, callback: Function) {
        this._remoteService.getTelephoneBillsByPeriod(year,month)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }
}
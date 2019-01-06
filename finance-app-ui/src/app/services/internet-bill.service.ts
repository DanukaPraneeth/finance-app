import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {InternetBillRemoteDataService} from "../remote/internet_bill_remote.service";
import {CreateBillResponse, InternetBill, UpdateBillResponse} from "../models/data-models";


@Injectable()
export class InternetBillsService {

    constructor(private _router: Router, private _remoteService: InternetBillRemoteDataService) {

    }

    getInternetBills(callback: Function) {
        this._remoteService.getInternetBills()
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    insertInternetBill(internetBill: InternetBill) {
        this._remoteService.insertInternetBill(internetBill)
            .subscribe((data: CreateBillResponse) => {
                // if (data["success"] == true) {
                //     this._router.navigate(["home"]);
                // } else {
                //     this._router.navigate(["singnup"]);
                // }
                this._router.navigate(["home"]);
            });

    }

    updateInternetBill(internetBill: InternetBill) {
        this._remoteService.updateInternetBill(internetBill)
            .subscribe((data: UpdateBillResponse) => {
                // if (data["success"] == true) {
                //     this._router.navigate(["home"]);
                // } else {
                //     this._router.navigate(["singnup"]);
                // }
                this._router.navigate(["viewBill"]);
            });
    }

    getInternetBillsByMonth(month: string, callback: Function) {
        this._remoteService.getInternetBillsByMonth(month)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getInternetBillsByYear(year: string, callback: Function) {
        this._remoteService.getInternetBillsByYear(year)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getInternetBillsByPeriod(year: string, month: string, callback: Function) {
        this._remoteService.getInternetBillsByPeriod(year,month)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getMonthlyExpenseOfYear(year: string, callback: Function) {
        this._remoteService.getMonthlyExpenseOfYear(year)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getLocationExpenseOfYear(year: string, callback: Function) {
        this._remoteService.getLocationExpenseOfYear(year)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getYearlyExpenseOfMonth(month: string, callback: Function) {
        this._remoteService.getYearlyExpenseOfMonth(month)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getLocationExpenseOfMonth(month: string, callback: Function) {
        this._remoteService.getLocationExpenseOfMonth(month)
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
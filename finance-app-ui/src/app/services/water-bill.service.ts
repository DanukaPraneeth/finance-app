import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {WaterBillRemoteDataService} from "../remote/water_bill_remote.service";
import {CreateBillResponse, WaterBill, UpdateBillResponse} from "../models/data-models";


@Injectable()
export class WaterBillsService {

    constructor(private _router: Router, private _remoteService: WaterBillRemoteDataService) {

    }

    getWaterBills(callback: Function) {
        this._remoteService.getWaterBills()
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    insertWaterBill(waterBill: WaterBill) {
        this._remoteService.insertWaterBill(waterBill)
            .subscribe((data: CreateBillResponse) => {
                // if (data["success"] == true) {
                //     this._router.navigate(["home"]);
                // } else {
                //     this._router.navigate(["singnup"]);
                // }
                this._router.navigate(["home"]);
            });

    }

    updateWaterBill(waterBill: WaterBill) {
        this._remoteService.updateWaterBill(waterBill)
            .subscribe((data: UpdateBillResponse) => {
                // if (data["success"] == true) {
                //     this._router.navigate(["home"]);
                // } else {
                //     this._router.navigate(["singnup"]);
                // }
                this._router.navigate(["viewBill"]);
            });
    }

    getWaterBillsByMonth(month: string, callback: Function) {
        this._remoteService.getWaterBillsByMonth(month)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getWaterBillsByYear(year: string, callback: Function) {
        this._remoteService.getWaterBillsByYear(year)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getWaterBillsByPeriod(year: string, month: string, callback: Function) {
        this._remoteService.getWaterBillsByPeriod(year,month)
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
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ElectricityBillRemoteDataService} from "../remote/electricity_bill_remote.service";
import {CreateBillResponse, ElectricityBill, UpdateBillResponse} from "../models/data-models";


@Injectable()
export class ElectricityBillsService {

    constructor(private _router: Router, private _remoteService: ElectricityBillRemoteDataService) {

    }

    getElectricityBills(callback: Function) {
        this._remoteService.getElectricityBills()
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    insertElectricityBill(electricityBill: ElectricityBill) {
        this._remoteService.insertElectricityBill(electricityBill)
            .subscribe((data: CreateBillResponse) => {
                // if (data["success"] == true) {
                //     this._router.navigate(["home"]);
                // } else {
                //     this._router.navigate(["singnup"]);
                // }
                this._router.navigate(["bill/show/electricity"]);
            });

    }

    updateElectricityBill(electricityBill: ElectricityBill) {
        this._remoteService.updateElectricityBill(electricityBill)
            .subscribe((data: UpdateBillResponse) => {
                // if (data["success"] == true) {
                //     this._router.navigate(["home"]);
                // } else {
                //     this._router.navigate(["singnup"]);
                // }
                this._router.navigate(["bill/show/electricity"]);
            });
    }

    getElectricityBillsByMonth(month: string, callback: Function) {
        this._remoteService.getElectricityBillsByMonth(month)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getElectricityBillsByYear(year: string, callback: Function) {
        this._remoteService.getElectricityBillsByYear(year)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getElectricityBillsByPeriod(year: string, month: string, callback: Function) {
        this._remoteService.getElectricityBillsByPeriod(year,month)
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
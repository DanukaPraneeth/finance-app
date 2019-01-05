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
                this._router.navigate(["bill/create"]);
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
                this._router.navigate(["viewBill"]);
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
}
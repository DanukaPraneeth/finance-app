import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ElectricityBillRemoteDataService} from "../remote/electricity_bill_remote.service";
import {CreateBillResponse, ElectricityBill} from "../models/data-models";


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
                this._router.navigate(["home"]);
            });

    }

}
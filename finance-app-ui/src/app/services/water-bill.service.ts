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
}
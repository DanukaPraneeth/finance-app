import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreateBillResponse, WaterBill} from "../models/data-models";

@Injectable()
export class WaterBillRemoteDataService {

    //private apiContext = "http://demo0207630.mockable.io";
    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/finance';

    waterBillsObservable: Observable<WaterBill[]>;
    private apiEndpoints: Object = {
        waterbills: this.apiContext + "/bills/waterbill",
        insertbill: this.apiContext + "/bills/waterbill",
        updatebill: this.apiContext + "/bills/waterbill"
    };

    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        })
    };

    constructor(private http: HttpClient) {
    }

    getWaterBills(){
        this.waterBillsObservable= this.http.get<WaterBill[]>(
            this.apiEndpoints['waterbills'], this.httpOptions
        )
        console.log(this.waterBillsObservable);
        return this.waterBillsObservable;
    }

    insertWaterBill(waterBill: WaterBill) {
        return this.http.post<CreateBillResponse>(this.apiEndpoints["insertbill"], waterBill, this.httpOptions);
    }

    updateWaterBill(waterBill: WaterBill) {
        console.log("Id:"+waterBill.id);
        return this.http.put<CreateBillResponse>(this.apiEndpoints["updatebill"] + "/" + waterBill.billNo,
            waterBill, this.httpOptions);
    }
}
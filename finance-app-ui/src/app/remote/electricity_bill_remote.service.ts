import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreateBillResponse, ElectricityBill} from "../models/data-models";
import {map} from 'rxjs/operators';

@Injectable()
export class ElectricityBillRemoteDataService {

    //private apiContext = "http://demo0207630.mockable.io";
    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/finance';

    electricityBillsObservable: Observable<ElectricityBill[]>;
    private apiEndpoints: Object = {
        electricitybills: this.apiContext + "/bills/electricitybill",
        insertbill: this.apiContext + "/bills/electricitybill"
    };

    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        })
    };

    constructor(private http: HttpClient) {
    }


    // getElectricityBills() {
    //     return this.http.get(this.apiEndpoints['electricitybills'], this.httpOptions)
    //         .pipe(map((response: Response) => {
    //             console.log(response);
    //             return {
    //                 success: true,
    //                 message: 'Electricity Bills Loaded Successfully',
    //                 payload: response.json()
    //             };
    //         }))
    //     // .catch
    //     // ((error: Response) => Observable.throw({
    //     //     success: false,
    //     //     message: 'Error Loading Rate Tax List',
    //     //     error: error
    //     // }));
    // }

    getElectricityBills(){
        this.electricityBillsObservable = this.http.get<ElectricityBill[]>(
            this.apiEndpoints['electricitybills'], this.httpOptions
        )
        console.log(this.electricityBillsObservable);
        return this.electricityBillsObservable;
    }

    insertElectricityBill(electricityBill: ElectricityBill) {
        return this.http.post<CreateBillResponse>(this.apiEndpoints["insertbill"], electricityBill, this.httpOptions);
    }
}
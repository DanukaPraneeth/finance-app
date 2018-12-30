import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreateBillResponse, TelephoneBill} from "../models/data-models";

@Injectable()
export class TelephoneBillRemoteDataService {

    //private apiContext = "http://demo0207630.mockable.io";
    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/finance';

    telephoneBillsObservable: Observable<TelephoneBill[]>;
    private apiEndpoints: Object = {
        telephonebills: this.apiContext + "/bills/telephonebills",
        insertbill: this.apiContext + "/bills/telephonebills",
        updatebill: this.apiContext + "/bills/telephonebills",
        telephoneBillsByMonth: this.apiContext + "/bills/telephonebills/filtermonth/",
        telephoneBillsByYear: this.apiContext + "/bills/telephonebills/filteryear/",
        telephoneBillsByPeriod: this.apiContext + "/bills/telephonebills/filterperiod/"
    };

    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        })
    };

    constructor(private http: HttpClient) {
    }

    getTelephoneBills(){
        this.telephoneBillsObservable= this.http.get<TelephoneBill[]>(
            this.apiEndpoints['telephonebills'], this.httpOptions
        )
        console.log(this.telephoneBillsObservable);
        return this.telephoneBillsObservable;
    }

    insertTelephoneBill(telephoneBill: TelephoneBill) {
        return this.http.post<CreateBillResponse>(this.apiEndpoints["insertbill"], telephoneBill, this.httpOptions);
    }

    updateTelephoneBill(telephoneBill: TelephoneBill) {
        console.log("Id:"+telephoneBill.id);
        return this.http.put<CreateBillResponse>(this.apiEndpoints["updatebill"] + "/" + telephoneBill.billId,
            telephoneBill, this.httpOptions);
    }

    getTelephoneBillsByMonth(month: string) {
        this.telephoneBillsObservable = this.http.get<TelephoneBill[]>(
            this.apiEndpoints['telephoneBillsByMonth'].concat(month), this.httpOptions
        )
        return this.telephoneBillsObservable;
    }

    getTelephoneBillsByYear(year: string) {
        this.telephoneBillsObservable = this.http.get<TelephoneBill[]>(
            this.apiEndpoints['telephoneBillsByYear'].concat(year), this.httpOptions
        )
        return this.telephoneBillsObservable;
    }

    getTelephoneBillsByPeriod(year: string, month: string) {
        this.telephoneBillsObservable = this.http.get<TelephoneBill[]>(
            this.apiEndpoints['telephoneBillsByPeriod'].concat(year).concat("-").concat(month), this.httpOptions
        )
        return this.telephoneBillsObservable;
    }
}
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
    CreateBillResponse, LocationExpenseInYear, MonthlyExpenseInYear, TelephoneBill,
    YearlyExpenseOfMonth
} from "../models/data-models";

@Injectable()
export class TelephoneBillRemoteDataService {

    //private apiContext = "http://demo0207630.mockable.io";
    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/finance';

    telephoneBillsObservable: Observable<TelephoneBill[]>;
    monthlyExpenseInYearObservable: Observable<MonthlyExpenseInYear[]>;
    locationExpenseInYearObservable: Observable<LocationExpenseInYear[]>;
    yearlyExpenseInMonthObservable: Observable<YearlyExpenseOfMonth[]>;

    private apiEndpoints: Object = {
        telephonebills: this.apiContext + "/bills/telephonebills",
        insertbill: this.apiContext + "/bills/telephonebills",
        updatebill: this.apiContext + "/bills/telephonebills",
        telephoneBillsByMonth: this.apiContext + "/bills/telephonebills/filtermonth/",
        telephoneBillsByYear: this.apiContext + "/bills/telephonebills/filteryear/",
        telephoneBillsByPeriod: this.apiContext + "/bills/telephonebills/filterperiod/",
        telephoneBillsSummaryByMonth: this.apiContext + "/bills/telephonebills/summary/month/",
        telephoneBillsSummaryByYearandLocation: this.apiContext + "/bills/telephonebills/summary/location/year/",
        telephoneBillsSummaryByMonthandLocation: this.apiContext + "/bills/telephonebills/summary/location/month/",
        telephoneBillsSummaryByYear: this.apiContext + "/bills/telephonebills/summary/year/"
    };

    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        })
    };

    constructor(private http: HttpClient) {
    }

    getTelephoneBills() {
        this.telephoneBillsObservable = this.http.get<TelephoneBill[]>(
            this.apiEndpoints['telephonebills'], this.httpOptions
        )
        console.log(this.telephoneBillsObservable);
        return this.telephoneBillsObservable;
    }

    insertTelephoneBill(telephoneBill: TelephoneBill) {
        return this.http.post<CreateBillResponse>(this.apiEndpoints["insertbill"], telephoneBill, this.httpOptions);
    }

    updateTelephoneBill(telephoneBill: TelephoneBill) {
        console.log("Id:" + telephoneBill.id);
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

    getMonthlyExpenseOfYear(year: string) {
        this.monthlyExpenseInYearObservable = this.http.get<MonthlyExpenseInYear[]>(
            this.apiEndpoints['telephoneBillsSummaryByYear'].concat(year), this.httpOptions
        )
        return this.monthlyExpenseInYearObservable;

    }

    getLocationExpenseOfYear(year: string) {
        this.locationExpenseInYearObservable = this.http.get<LocationExpenseInYear[]>(
            this.apiEndpoints['telephoneBillsSummaryByYearandLocation'].concat(year), this.httpOptions
        )
        return this.locationExpenseInYearObservable;
    }

    getYearlyExpenseOfMonth(month: string) {
        this.yearlyExpenseInMonthObservable = this.http.get<YearlyExpenseOfMonth[]>(
            this.apiEndpoints['telephoneBillsSummaryByMonth'].concat(month), this.httpOptions
        )
        return this.yearlyExpenseInMonthObservable;
    }

    getLocationExpenseOfMonth(month: string) {
        this.locationExpenseInYearObservable = this.http.get<LocationExpenseInYear[]>(
            this.apiEndpoints['telephoneBillsSummaryByMonthandLocation'].concat(month), this.httpOptions
        )
        return this.locationExpenseInYearObservable;
    }
}
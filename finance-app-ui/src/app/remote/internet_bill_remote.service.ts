import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
    CreateBillResponse, LocationExpenseInYear, MonthlyExpenseInYear, InternetBill,
    YearlyExpenseOfMonth
} from "../models/data-models";

@Injectable()
export class InternetBillRemoteDataService {

    //private apiContext = "http://demo0207630.mockable.io";
    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/finance';

    internetBillsObservable: Observable<InternetBill[]>;
    monthlyExpenseInYearObservable: Observable<MonthlyExpenseInYear[]>;
    locationExpenseInYearObservable: Observable<LocationExpenseInYear[]>;
    yearlyExpenseInMonthObservable: Observable<YearlyExpenseOfMonth[]>;

    private apiEndpoints: Object = {
        internetbills: this.apiContext + "/bills/internetbills",
        insertbill: this.apiContext + "/bills/internetbills",
        updatebill: this.apiContext + "/bills/internetbills",
        internetBillsByMonth: this.apiContext + "/bills/internetbills/filtermonth/",
        internetBillsByYear: this.apiContext + "/bills/internetbills/filteryear/",
        internetBillsByPeriod: this.apiContext + "/bills/internetbills/filterperiod/",
        internetBillsSummaryByMonth: this.apiContext + "/bills/internetbills/summary/month/",
        internetBillsSummaryByYearandLocation: this.apiContext + "/bills/internetbills/summary/location/year/",
        internetBillsSummaryByMonthandLocation: this.apiContext + "/bills/internetbills/summary/location/month/",
        internetBillsSummaryByYear: this.apiContext + "/bills/internetbills/summary/year/"
    };

    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        })
    };

    constructor(private http: HttpClient) {
    }

    getInternetBills() {
        this.internetBillsObservable = this.http.get<InternetBill[]>(
            this.apiEndpoints['internetbills'], this.httpOptions
        )
        console.log(this.internetBillsObservable);
        return this.internetBillsObservable;
    }

    insertInternetBill(internetBill: InternetBill) {
        return this.http.post<CreateBillResponse>(this.apiEndpoints["insertbill"], internetBill, this.httpOptions);
    }

    updateInternetBill(internetBill: InternetBill) {
        console.log("Id:" + internetBill.id);
        return this.http.put<CreateBillResponse>(this.apiEndpoints["updatebill"] + "/" + internetBill.billId,
            internetBill, this.httpOptions);
    }

    getInternetBillsByMonth(month: string) {
        this.internetBillsObservable = this.http.get<InternetBill[]>(
            this.apiEndpoints['internetBillsByMonth'].concat(month), this.httpOptions
        )
        return this.internetBillsObservable;
    }

    getInternetBillsByYear(year: string) {
        this.internetBillsObservable = this.http.get<InternetBill[]>(
            this.apiEndpoints['internetBillsByYear'].concat(year), this.httpOptions
        )
        return this.internetBillsObservable;
    }

    getInternetBillsByPeriod(year: string, month: string) {
        this.internetBillsObservable = this.http.get<InternetBill[]>(
            this.apiEndpoints['internetBillsByPeriod'].concat(year).concat("-").concat(month), this.httpOptions
        )
        return this.internetBillsObservable;
    }

    getMonthlyExpenseOfYear(year: string) {
        this.monthlyExpenseInYearObservable = this.http.get<MonthlyExpenseInYear[]>(
            this.apiEndpoints['internetBillsSummaryByYear'].concat(year), this.httpOptions
        )
        return this.monthlyExpenseInYearObservable;

    }

    getLocationExpenseOfYear(year: string) {
        this.locationExpenseInYearObservable = this.http.get<LocationExpenseInYear[]>(
            this.apiEndpoints['internetBillsSummaryByYearandLocation'].concat(year), this.httpOptions
        )
        return this.locationExpenseInYearObservable;
    }

    getYearlyExpenseOfMonth(month: string) {
        this.yearlyExpenseInMonthObservable = this.http.get<YearlyExpenseOfMonth[]>(
            this.apiEndpoints['internetBillsSummaryByMonth'].concat(month), this.httpOptions
        )
        return this.yearlyExpenseInMonthObservable;
    }

    getLocationExpenseOfMonth(month: string) {
        this.locationExpenseInYearObservable = this.http.get<LocationExpenseInYear[]>(
            this.apiEndpoints['internetBillsSummaryByMonthandLocation'].concat(month), this.httpOptions
        )
        return this.locationExpenseInYearObservable;
    }
}
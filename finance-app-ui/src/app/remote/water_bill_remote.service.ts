import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
    CreateBillResponse, LocationExpenseInYear, MonthlyExpenseInYear, WaterBill,
    YearlyExpenseOfMonth
} from "../models/data-models";

@Injectable()
export class WaterBillRemoteDataService {

    //private apiContext = "http://demo0207630.mockable.io";
    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/finance';

    waterBillsObservable: Observable<WaterBill[]>;
    monthlyExpenseInYearObservable: Observable<MonthlyExpenseInYear[]>;
    locationExpenseInYearObservable: Observable<LocationExpenseInYear[]>;
    yearlyExpenseInMonthObservable: Observable<YearlyExpenseOfMonth[]>;

    private apiEndpoints: Object = {
        waterbills: this.apiContext + "/bills/waterbill",
        insertbill: this.apiContext + "/bills/waterbill",
        updatebill: this.apiContext + "/bills/waterbill",
        waterBillsByMonth: this.apiContext + "/bills/waterbill/filtermonth/",
        waterBillsByYear: this.apiContext + "/bills/waterbill/filteryear/",
        waterBillsByPeriod: this.apiContext + "/bills/waterbill/filterperiod/",
        waterBillsSummaryByMonth: this.apiContext + "/bills/waterbill/summary/month/",
        waterBillsSummaryByYearandLocation: this.apiContext + "/bills/waterbill/summary/location/year/",
        waterBillsSummaryByMonthandLocation: this.apiContext + "/bills/waterbill/summary/location/month/",
        waterBillsSummaryByYear: this.apiContext + "/bills/waterbill/summary/year/"
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

    getWaterBillsByMonth(month: string) {
        this.waterBillsObservable = this.http.get<WaterBill[]>(
            this.apiEndpoints['waterBillsByMonth'].concat(month), this.httpOptions
        )
        return this.waterBillsObservable;
    }

    getWaterBillsByYear(year: string) {
        this.waterBillsObservable = this.http.get<WaterBill[]>(
            this.apiEndpoints['waterBillsByYear'].concat(year), this.httpOptions
        )
        return this.waterBillsObservable;
    }

    getWaterBillsByPeriod(year: string, month: string) {
        this.waterBillsObservable = this.http.get<WaterBill[]>(
            this.apiEndpoints['waterBillsByPeriod'].concat(year).concat("-").concat(month), this.httpOptions
        )
        return this.waterBillsObservable;
    }

    getMonthlyExpenseOfYear(year: string) {
        this.monthlyExpenseInYearObservable = this.http.get<MonthlyExpenseInYear[]>(
            this.apiEndpoints['waterBillsSummaryByYear'].concat(year), this.httpOptions
        )
        return this.monthlyExpenseInYearObservable;

    }

    getLocationExpenseOfYear(year: string) {
        this.locationExpenseInYearObservable = this.http.get<LocationExpenseInYear[]>(
            this.apiEndpoints['waterBillsSummaryByYearandLocation'].concat(year), this.httpOptions
        )
        return this.locationExpenseInYearObservable;
    }

    getYearlyExpenseOfMonth(month: string) {
        this.yearlyExpenseInMonthObservable = this.http.get<YearlyExpenseOfMonth[]>(
            this.apiEndpoints['waterBillsSummaryByMonth'].concat(month), this.httpOptions
        )
        return this.yearlyExpenseInMonthObservable;
    }

    getLocationExpenseOfMonth(month: string) {
        this.locationExpenseInYearObservable = this.http.get<LocationExpenseInYear[]>(
            this.apiEndpoints['waterBillsSummaryByYearandLocation'].concat(month), this.httpOptions
        )
        return this.locationExpenseInYearObservable;
    }
}
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
    CreateBillResponse, ElectricityBill, LocationExpenseInYear, MonthlyExpenseInYear,
    YearlyExpenseOfMonth
} from "../models/data-models";
import {map} from 'rxjs/operators';
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Injectable()
export class ElectricityBillRemoteDataService {

    //private apiContext = "http://demo0207630.mockable.io";
    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/finance';

    electricityBillsObservable: Observable<ElectricityBill[]>;
    monthlyExpenseInYearObservable: Observable<MonthlyExpenseInYear[]>;
    locationExpenseInYearObservable: Observable<LocationExpenseInYear[]>;
    yearlyExpenseInMonthObservable: Observable<YearlyExpenseOfMonth[]>;

    private apiEndpoints: Object = {
        electricitybills: this.apiContext + "/bills/electricitybill",
        insertbill: this.apiContext + "/bills/electricitybill",
        updatebill: this.apiContext + "/bills/electricitybill",
        electricityBillsByMonth: this.apiContext + "/bills/electricitybill/filtermonth/",
        electricityBillsByYear: this.apiContext + "/bills/electricitybill/filteryear/",
        electricityBillsByPeriod: this.apiContext + "/bills/electricitybill/filterperiod/",
        electricityBillsSummaryByMonth: this.apiContext + "/bills/electricitybill/summary/month/",
        electricityBillsSummaryByYearandLocation: this.apiContext + "/bills/electricitybill/summary/location/year/",
        electricityBillsSummaryByMonthandLocation: this.apiContext + "/bills/electricitybill/summary/location/month/",
        electricityBillsSummaryByYear: this.apiContext +"/bills/electricitybill/summary/year/"
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

    getElectricityBills() {
        this.electricityBillsObservable = this.http.get<ElectricityBill[]>(
            this.apiEndpoints['electricitybills'], this.httpOptions
        )
        return this.electricityBillsObservable;
    }

    insertElectricityBill(electricityBill: ElectricityBill) {
        return this.http.post<CreateBillResponse>(this.apiEndpoints["insertbill"], electricityBill, this.httpOptions);
    }

    updateElectricityBill(electricityBill: ElectricityBill) {
        return this.http.put<CreateBillResponse>(this.apiEndpoints["updatebill"] + "/" + electricityBill.billNo,
            electricityBill, this.httpOptions);
    }

    getElectricityBillsByMonth(month: string) {
        this.electricityBillsObservable = this.http.get<ElectricityBill[]>(
            this.apiEndpoints['electricityBillsByMonth'].concat(month), this.httpOptions
        )
        return this.electricityBillsObservable;
    }

    getElectricityBillsByYear(year: string) {
        this.electricityBillsObservable = this.http.get<ElectricityBill[]>(
            this.apiEndpoints['electricityBillsByYear'].concat(year), this.httpOptions
        )
        return this.electricityBillsObservable;
    }

    getElectricityBillsByPeriod(year: string, month: string) {
        this.electricityBillsObservable = this.http.get<ElectricityBill[]>(
            this.apiEndpoints['electricityBillsByPeriod'].concat(year).concat("-").concat(month), this.httpOptions
        )
        return this.electricityBillsObservable;
    }

    getMonthlyExpenseOfYear(year: string) {
        this.monthlyExpenseInYearObservable = this.http.get<MonthlyExpenseInYear[]>(
            this.apiEndpoints['electricityBillsSummaryByYear'].concat(year), this.httpOptions
        )
        return this.monthlyExpenseInYearObservable;

    }

    getLocationExpenseOfYear(year: string) {
        this.locationExpenseInYearObservable = this.http.get<LocationExpenseInYear[]>(
            this.apiEndpoints['electricityBillsSummaryByYearandLocation'].concat(year), this.httpOptions
        )
        return this.locationExpenseInYearObservable;
    }

    getYearlyExpenseOfMonth(month: string) {
        this.yearlyExpenseInMonthObservable = this.http.get<YearlyExpenseOfMonth[]>(
            this.apiEndpoints['electricityBillsSummaryByMonth'].concat(month), this.httpOptions
        )
        return this.yearlyExpenseInMonthObservable;
    }

    getLocationExpenseOfMonth(month: string) {
        this.locationExpenseInYearObservable = this.http.get<LocationExpenseInYear[]>(
            this.apiEndpoints['electricityBillsSummaryByMonthandLocation'].concat(month), this.httpOptions
        )
        return this.locationExpenseInYearObservable;
    }
}
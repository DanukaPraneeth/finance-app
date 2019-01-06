import { Injectable } from '@angular/core';
import {ApprovalResponse, BillToApprove} from "../models/data-models";
import {Observable} from "rxjs/Rx";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApprovalRemoteService {

  approvalObservable: Observable<ApprovalResponse>;

  private url = new URL(window.location.href);
  private apiContext = this.url.protocol + '//' + this.url.host + '/finance';

  private apiEndpoints: Object = {
    certifyBill: this.apiContext + "/bills/approve/"
  };

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };

  constructor(private http: HttpClient) { }

  approveBill(bill: BillToApprove) {
    return this.http.post<ApprovalResponse>(this.apiEndpoints["certifyBill"] + bill.billId, bill, this.httpOptions);
  }
}

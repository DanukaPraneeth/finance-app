import { Injectable } from '@angular/core';
import {PendingCertification} from "../models/data-models";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardRemoteService {

  certificationObservable: Observable<PendingCertification[]>;

  private url = new URL(window.location.href);
  private apiContext = this.url.protocol + '//' + this.url.host + '/finance';

  private apiEndpoints: Object = {
    pendingBills: this.apiContext + "/bills/pending"
  };

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };

  constructor(private http: HttpClient) { }

  getPendingCertifiactions(){
    this.certificationObservable = this.http.get<PendingCertification[]>(
        this.apiEndpoints['pendingBills'], this.httpOptions
    )
    return this.certificationObservable;
  }
}

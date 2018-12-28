import {Injectable} from "@angular/core";
import {DashboardRemoteService} from "../remote/dashboard_remote.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _remoteService: DashboardRemoteService) { }

  getPendingCertifiactions(callback: Function) {
    this._remoteService.getPendingCertifiactions()
        .subscribe(
            data => {
              callback(data);
            },
            error => {
              callback(error);
            }
        );
  }
}

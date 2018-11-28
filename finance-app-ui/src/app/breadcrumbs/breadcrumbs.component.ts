import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  private activeView: any;
  private approvals: boolean;

  constructor(private _router: Router) {
  }

  ngOnInit() {

    this.approvals = false;
    this._router.events
      .subscribe((event: NavigationEnd) => {
        if (event.url) {
          this.activeView = event.url.toString().replace('/', '').split('/');
          if (this.activeView.length == 2) {
            if (this.activeView[0] == 'approvals') {
              this.approvals = true
            } else {
              this.approvals = false;
            }
          } else {
            this.approvals = false;
          }
        }
      });

  }

}

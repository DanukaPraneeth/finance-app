import {Component, Input, OnInit} from '@angular/core';
import {Certify} from "../../models/data-models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-certify-count',
  templateUrl: './certify-count.component.html',
  styleUrls: ['./certify-count.component.scss']
})
export class CertifyCountComponent implements OnInit {

  @Input()
  bill: Certify;


  constructor(private _router: Router) { }

  ngOnInit() {
  }

  navigate() {
    this._router.navigate([this.bill.route]);
  }

}

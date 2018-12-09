import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-certify-electricity',
  templateUrl: './certify-electricity.component.html',
  styleUrls: ['./certify-electricity.component.scss']
})
export class CertifyElectricityComponent implements OnInit {

  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }

}

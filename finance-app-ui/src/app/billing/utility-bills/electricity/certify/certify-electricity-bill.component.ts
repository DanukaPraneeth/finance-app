import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ElectricityBill} from "../../../../models/data-models";

@Component({
    selector: 'app-certify-electricity-bill',
    templateUrl: './certify-electricity-bill.component.html',
    styleUrls: ['./certify-electricity-bill.component.scss']
})
export class CertifyElectricityBillComponent implements OnInit {


    @Input()
    bill: ElectricityBill;

    // @Output()
    // private onUpdateTask: EventEmitter<boolean> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    approve() {

    }

    reject() {

    }

}

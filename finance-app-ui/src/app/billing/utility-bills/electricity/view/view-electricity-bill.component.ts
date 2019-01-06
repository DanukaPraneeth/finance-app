import {Component, OnInit, TemplateRef} from "@angular/core";
import {ElectricityBill} from "../../../../models/data-models";
import {ElectricityBillsService} from "../../../../services/electricity-bill.service";
import {Router} from "@angular/router";
import * as jspdf from 'jspdf';
import 'jspdf-autotable';

@Component({
    selector: "app-view-electricity-bill",
    templateUrl: "./view-electricity-bill.component.html",
    styleUrls: ["./view-electricity-bill.component.scss"]
})
export class ViewElectricityBillComponent implements OnInit {


    fieldSet: string [] = ["Bill No", "Period", "Prev Reading", "Curr Reading", "No.of Units", "Amount", "Location", "Certification", "", ""];
    yearString: string [] = ["All", "2017", "2018", "2019", "2020"];
    monthString: string [] = ["All", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    electrictyBillList: ElectricityBill [];
    private modalTitle: string;
    private showUpdateBill: boolean;
    private changingBill: ElectricityBill;
    private showCertifyBill: boolean;
    private selectedYear: string = "All";
    private selectedMonth: string = "All";


    constructor(private _electrictyBillService: ElectricityBillsService, private _router: Router) {
    }

    ngOnInit() {
        this.electrictyBillList = [];
        this.retrieveElectricityBills();
        this.showUpdateBill = false;
        this.showCertifyBill = false;
    }

    private getAllElectrictyBills() {
        this._electrictyBillService.getElectricityBills((response) => {
            this.electrictyBillList = response;
        });
    }

    private getAllElectrictyBillsByMonth(month: string) {
        this._electrictyBillService.getElectricityBillsByMonth(month, (response) => {
            this.electrictyBillList = response;
        });
    }

    private getAllElectrictyBillsByYear(year: string) {
        this._electrictyBillService.getElectricityBillsByYear(year, (response) => {
            this.electrictyBillList = response;
        });
    }

    private getAllElectrictyBillsByPeriod(year: string, month: string) {
        this._electrictyBillService.getElectricityBillsByPeriod(year, month, (response) => {
            this.electrictyBillList = response;
        });
    }

    changeDialogTitle() {
        return this.modalTitle = "Update Electricity Bill";
    }

    changeHeading() {
        return this.modalTitle = "Certify Electricity Bill";
    }

    clearModalContent() {
        this.showUpdateBill = false;
        this.showCertifyBill = false;
        this.retrieveElectricityBills();
    }

    onUpdateBillHandler(event: boolean) {
        if (event) {
            this.retrieveElectricityBills();
        }
    }

    public onYearSelected(event) {
        this.selectedYear = event.target.value;

        this.retrieveElectricityBills();
    }

    public onMonthSelected(event) {
        var selectedType = event.target.value;

        switch (selectedType) {
            case "January": {
                this.selectedMonth = "01";
                break;
            }
            case "February": {
                this.selectedMonth = "02";
                break;
            }
            case "March": {
                this.selectedMonth = "03";
                break;
            }
            case "April": {
                this.selectedMonth = "04";
                break;
            }
            case "May": {
                this.selectedMonth = "05";
                break;
            }
            case "June": {
                this.selectedMonth = "06";
                break;
            }
            case "July": {
                this.selectedMonth = "07";
                break;
            }
            case "August": {
                this.selectedMonth = "08";
                break;
            }
            case "September": {
                this.selectedMonth = "09";
                break;
            }
            case "October": {
                this.selectedMonth = "10";
                break;
            }
            case "November": {
                this.selectedMonth = "11";
                break;
            }
            case "December": {
                this.selectedMonth = "12";
                break;
            }
            default: {
                this.selectedMonth = "All";
                break;
            }
        }

        this.retrieveElectricityBills();
    }

    private retrieveElectricityBills() {
        if (this.selectedYear == "All" && this.selectedMonth == "All")
            this.getAllElectrictyBills();
        else if (this.selectedYear == "All" && this.selectedMonth != "All")
            this.getAllElectrictyBillsByMonth(this.selectedMonth);
        else if (this.selectedYear != "All" && this.selectedMonth == "All")
            this.getAllElectrictyBillsByYear(this.selectedYear);
        else
            this.getAllElectrictyBillsByPeriod(this.selectedYear, this.selectedMonth);
    }

    private downloadTable() {
        var doc = new jspdf();
        var col = ['Bill No', 'Period', 'Prev Reading', 'Curr Reading', 'No.of Units', 'Amount', 'Location', 'Certification'];
        var rows = [];

        this.electrictyBillList.forEach(element => {
            var temp = [element.billNo, element.period, element.previousReading, element.currentReading, element.noOfUnits, element.amount, element.location, element.certification];
            rows.push(temp);

        });

        doc.setFontSize(16);
        doc.setFontStyle('bold');

        doc.text('Electricity Bill Report', 80, 20);

        doc.autoTable({
            head: [col],
            body: rows,
            theme: 'grid',
            startY: 30
        });
        doc.save('Electricity Bill Report.pdf');
    }
}

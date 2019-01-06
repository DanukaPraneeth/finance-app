import {Component, OnInit, TemplateRef} from "@angular/core";
import {TelephoneBill} from "../../../../models/data-models";
import {TelephoneBillsService} from "../../../../services/telephone-bill.service";
import {Router} from "@angular/router";

@Component({
    selector: "app-view-telephone-bill",
    templateUrl: "./view-telephone-bill.component.html",
    styleUrls: ["./view-telephone-bill.component.scss"]
})
export class ViewTelephoneBillComponent implements OnInit {


    fieldSet: string [] = ["Date", "Bill No", "Period", "Category", "Amount", "Location", "Certification","",""];
    yearString: string [] = ["All", "2017", "2018", "2019", "2020"];
    monthString: string [] = ["All","January", "February", "March", "April", "May", "June", "July", "August", "September","October","November","December"];
    telephoneBillList: TelephoneBill [];
    private modalTitle: string;
    private showUpdateBill: boolean;
    private changingBill: TelephoneBill;
    private showCertifyBill: boolean;
    private selectedYear: string = "All";
    private selectedMonth: string = "All";


    constructor(private _telephoneBillService: TelephoneBillsService, private _router: Router) {
    }

    ngOnInit() {
        this.telephoneBillList = [];
        this.retrieveTelephoneBills();
        this.showUpdateBill = false;
        this.showCertifyBill = false;
    }

    private getAllTelephoneBills() {
        this._telephoneBillService.getTelephoneBills((response) => {
            this.telephoneBillList = response;
        });
    }

    private getAllTelephoneBillsByMonth(month: string) {
        this._telephoneBillService.getTelephoneBillsByMonth(month,(response) => {
            this.telephoneBillList = response;
        });
    }

    private getAllTelephoneBillsByYear(year: string) {
        this._telephoneBillService.getTelephoneBillsByYear(year,(response) => {
            this.telephoneBillList = response;
        });
    }

    private getAllTelephoneBillsByPeriod(year: string,month: string) {
        this._telephoneBillService.getTelephoneBillsByPeriod(year,month,(response) => {
            this.telephoneBillList = response;
        });
    }

    changeDialogTitle() {
        return this.modalTitle = "Update Telephone Bill";
    }

    changeHeading() {
        return this.modalTitle = "Certify Telephone Bill";
    }

    clearModalContent() {
        this.showUpdateBill = false;
        this.showCertifyBill = false;
        this.retrieveTelephoneBills();
    }

    onUpdateBillHandler(event: boolean) {
        if (event) {
            this.retrieveTelephoneBills();
        }
    }

    public onYearSelected(event) {
        this.selectedYear = event.target.value;

        this.retrieveTelephoneBills();
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

        this.retrieveTelephoneBills();
    }

    private retrieveTelephoneBills() {
        if(this.selectedYear == "All" && this.selectedMonth == "All")
            this.getAllTelephoneBills();
        else if(this.selectedYear == "All" && this.selectedMonth != "All")
            this.getAllTelephoneBillsByMonth(this.selectedMonth);
        else if(this.selectedYear != "All" && this.selectedMonth == "All")
            this.getAllTelephoneBillsByYear(this.selectedYear);
        else
            this.getAllTelephoneBillsByPeriod(this.selectedYear,this.selectedMonth);
    }

    private showPendingOnly(item): boolean {
        if (item == "pending") {
            return true;
        } else {
            return false;
        }
    }
}

import {Component, OnInit, TemplateRef} from "@angular/core";
import {InternetBill} from "../../../../models/data-models";
import {InternetBillsService} from "../../../../services/internet-bill.service";
import {Router} from "@angular/router";

@Component({
    selector: "app-view-internet-bill",
    templateUrl: "./view-internet-bill.component.html",
    styleUrls: ["./view-internet-bill.component.scss"]
})
export class ViewInternetBillComponent implements OnInit {


    fieldSet: string [] = ["Date", "Bill No", "Period", "Category", "Amount", "Location", "Certification","",""];
    yearString: string [] = ["All", "2017", "2018", "2019", "2020"];
    monthString: string [] = ["All","January", "February", "March", "April", "May", "June", "July", "August", "September","October","November","December"];
    internetBillList: InternetBill [];
    private modalTitle: string;
    private showUpdateBill: boolean;
    private changingBill: InternetBill;
    private showCertifyBill: boolean;
    private selectedYear: string = "All";
    private selectedMonth: string = "All";


    constructor(private _internetBillService: InternetBillsService, private _router: Router) {
    }

    ngOnInit() {
        this.internetBillList = [];
        this.retrieveInternetBills();
        this.showUpdateBill = false;
        this.showCertifyBill = false;
    }

    private getAllInternetBills() {
        this._internetBillService.getInternetBills((response) => {
            this.internetBillList = response;
        });
    }

    private getAllInternetBillsByMonth(month: string) {
        this._internetBillService.getInternetBillsByMonth(month,(response) => {
            this.internetBillList = response;
        });
    }

    private getAllInternetBillsByYear(year: string) {
        this._internetBillService.getInternetBillsByYear(year,(response) => {
            this.internetBillList = response;
        });
    }

    private getAllInternetBillsByPeriod(year: string,month: string) {
        this._internetBillService.getInternetBillsByPeriod(year,month,(response) => {
            this.internetBillList = response;
        });
    }

    changeDialogTitle() {
        return this.modalTitle = "Update Internet Bill";
    }

    changeHeading() {
        return this.modalTitle = "Certify Internet Bill";
    }

    clearModalContent() {
        this.showUpdateBill = false;
        this.showCertifyBill = false;
        this.retrieveInternetBills();
    }

    onUpdateBillHandler(event: boolean) {
        if (event) {
            this.retrieveInternetBills();
        }
    }

    public onYearSelected(event) {
        this.selectedYear = event.target.value;

        this.retrieveInternetBills();
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

        this.retrieveInternetBills();
    }

    private retrieveInternetBills() {
        if(this.selectedYear == "All" && this.selectedMonth == "All")
            this.getAllInternetBills();
        else if(this.selectedYear == "All" && this.selectedMonth != "All")
            this.getAllInternetBillsByMonth(this.selectedMonth);
        else if(this.selectedYear != "All" && this.selectedMonth == "All")
            this.getAllInternetBillsByYear(this.selectedYear);
        else
            this.getAllInternetBillsByPeriod(this.selectedYear,this.selectedMonth);
    }

    private showPendingOnly(item): boolean {
        if (item == "pending") {
            return true;
        } else {
            return false;
        }
    }
}

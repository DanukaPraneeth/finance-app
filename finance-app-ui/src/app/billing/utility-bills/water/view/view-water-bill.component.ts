import {Component, OnInit, TemplateRef} from "@angular/core";
import {WaterBill} from "../../../../models/data-models";
import {WaterBillsService} from "../../../../services/water-bill.service";
import {Router} from "@angular/router";

@Component({
    selector: "app-view-water-bill",
    templateUrl: "./view-water-bill.component.html",
    styleUrls: ["./view-water-bill.component.scss"]
})
export class ViewWaterBillComponent implements OnInit {


    fieldSet: string [] = ["Bill Number", "Previous Reading", "Current Reading", "No. of Units", "Amount", "Location", "Certification","",""];
    yearString: string [] = ["All", "2017", "2018", "2019", "2020"];
    monthString: string [] = ["All","January", "February", "March", "April", "May", "June", "July", "August", "September","October","November","December"];
    waterBillList: WaterBill [];
    private modalTitle: string;
    private showUpdateBill: boolean;
    private changingBill: WaterBill;
    private showCertifyBill: boolean;
    private selectedYear: string = "All";
    private selectedMonth: string = "All";


    constructor(private _waterBillService: WaterBillsService, private _router: Router) {
    }

    ngOnInit() {
        this.waterBillList = [];
        this.retrieveWaterBills();
        this.showUpdateBill = false;
        this.showCertifyBill = false;
    }

    private getAllWaterBills() {
        this._waterBillService.getWaterBills((response) => {
            this.waterBillList = response;
        });
    }

    private getAllWaterBillsByMonth(month: string) {
        this._waterBillService.getWaterBillsByMonth(month,(response) => {
            this.waterBillList = response;
        });
    }

    private getAllWaterBillsByYear(year: string) {
        this._waterBillService.getWaterBillsByYear(year,(response) => {
            this.waterBillList = response;
        });
    }

    private getAllWaterBillsByPeriod(year: string,month: string) {
        this._waterBillService.getWaterBillsByPeriod(year,month,(response) => {
            this.waterBillList = response;
        });
    }

    changeDialogTitle() {
        return this.modalTitle = "Update Water Bill";
    }

    changeHeading() {
        return this.modalTitle = "Certify Water Bill";
    }

    clearModalContent() {
        this.showUpdateBill = false;
        this.showCertifyBill = false;
        this.retrieveWaterBills();
    }

    onUpdateBillHandler(event: boolean) {
        if (event) {
            this.retrieveWaterBills();
        }
    }

    public onYearSelected(event) {
        this.selectedYear = event.target.value;

        this.retrieveWaterBills();
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

        this.retrieveWaterBills();
    }

    private retrieveWaterBills() {
        if(this.selectedYear == "All" && this.selectedMonth == "All")
            this.getAllWaterBills();
        else if(this.selectedYear == "All" && this.selectedMonth != "All")
            this.getAllWaterBillsByMonth(this.selectedMonth);
        else if(this.selectedYear != "All" && this.selectedMonth == "All")
            this.getAllWaterBillsByYear(this.selectedYear);
        else
            this.getAllWaterBillsByPeriod(this.selectedYear,this.selectedMonth);
    }

    private showPendingOnly(item): boolean {
        if (item == "pending") {
            return true;
        } else {
            return false;
        }
    }
}

import {Component, OnInit} from '@angular/core';
import {LocationExpenseInYear, MonthlyExpenseInYear, YearlyExpenseOfMonth} from "../../../../models/data-models";
import {Router} from "@angular/router";
import {WaterBillsService} from "../../../../services/water-bill.service";


@Component({
    selector: 'app-charts-water-bill',
    templateUrl: './charts-water.component.html',
    styleUrls: ['./charts-water.component.scss']
})
export class ChartsWaterComponent implements OnInit {

    private chartTypeBar: string = "bar";
    private chartDatasetsBar: Array<any>;
    private chartLabelsBar: Array<any>;
    private chartColorsBar: Array<any>;
    private chartOptionsBar: any;
    private chartTypePie: string = "pie";
    private chartDatasetsPie: Array<any>;
    private chartLabelsPie: Array<any>;
    private chartColorsPie: Array<any>;
    private chartOptionsPie: any;
    private chartTypeLine: string;
    private chartDatasetsLine: Array<any>;
    private chartLabelsLine: Array<any>;
    private chartColorsLine: Array<any>;
    private chartOptionsLine: any;
    private barChartHeader: string;
    private pieChartHeader: string;

    propertyString: string [] = ["Year", "Month", "Location"];
    private selectedProperty: string;
    private dropDownLable: string;
    private secondDropdownString: string[];
    private yearString: string [] = ["2017", "2018", "2019", "2020"];
    private monthString: string [] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    private isYearSelected: boolean;
    private isMonthselected: boolean;
    private monthlyExpenseInYearList: MonthlyExpenseInYear [];
    private selectedValue: string;
    private locationExpenseInYearList: LocationExpenseInYear [];
    private yearlyExpenseOfMonthList: YearlyExpenseOfMonth [];


    constructor(private _waterBillService: WaterBillsService, private _router: Router) {
    }

    ngOnInit() {

        this.clearAll();
        this.isYearSelected = true;
        this.dropDownLable = "Select Year";
        this.secondDropdownString = this.yearString;
        this.monthlyExpenseInYearList = [];
        this.locationExpenseInYearList = [];
        this.yearlyExpenseOfMonthList = [];

        //this.createPieChart();
        //this.createBarChart();
        //this.createLineChart();
    }

    createPieChart(dataSet: Array<any>, labelSet: Array<any>) {

        this.chartDatasetsPie = [
            {
                data: dataSet,
                label: 'Water consumption by Location'}
        ];

        this.chartLabelsPie = labelSet;

        this.chartColorsPie = [
            {
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
                borderWidth: 1,
            }
        ];

        this.chartOptionsPie = {
            responsive: true
        };

    }

    createBarChart(dataSet: Array<any>, labelSet: Array<any>) {

        this.chartLabelsBar = labelSet;
        this.chartDatasetsBar = [
            {
                data: dataSet,
                label: 'Water Consumption by Rupees'
            }
        ]

        this.chartColorsBar = [
            {
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
            }
        ];

        this.chartOptionsBar = {
            responsive: true
        };

    }

    private createLineChart() {
        this.chartTypeLine = 'line';

        this.chartDatasetsLine = [
            {data: [65, 59, 80, 81, 56, 55, 40], label: '2017'},
            {data: [28, 48, 40, 19, 86, 27, 90], label: '2018'}
        ];

        this.chartLabelsLine = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

        this.chartColorsLine = [
            {
                backgroundColor: 'rgba(105, 0, 132, .2)',
                borderColor: 'rgba(200, 99, 132, .7)',
                borderWidth: 2,
            },
            {
                backgroundColor: 'rgba(0, 137, 132, .2)',
                borderColor: 'rgba(0, 10, 130, .7)',
                borderWidth: 2,
            }
        ];

        this.chartOptionsLine = {
            responsive: true
        };

    }

    public onPropertySelected(event) {
        this.selectedProperty = event.target.value;
        this.clearAll();
        this.clearCharts();

        switch (this.selectedProperty) {
            case "Year": {
                this.isYearSelected = true;
                this.dropDownLable = "Select Year";
                this.secondDropdownString = this.yearString;
                break;
            }
            case "Month": {
                this.isMonthselected = true;
                this.dropDownLable = "Select Month";
                this.secondDropdownString = this.monthString;
                break;
            }
            default: {
                this.clearAll();
                break;
            }
        }

    }

    public onSecondDropdownSelected(event) {
        //this.clearCharts();
        this.selectedValue = event.target.value;
        if(this.isYearSelected){
            this.barChartHeader = "Monthly consumption in "+this.selectedValue;
            this.pieChartHeader = "Location consumption in "+this.selectedValue;
            this.createYearCharts(this.selectedValue);
        }
        else if(this.isMonthselected){
            this.barChartHeader = "Yearly consumption in "+this.selectedValue;
            this.pieChartHeader = "Location consumption in "+this.selectedValue;
            this.createMonthCharts(this.selectedValue);
        }
        else
            console.log("Location filter is still in progress");
    }

    private clearAll() {
        this.isMonthselected = false;
        this.isYearSelected = false;
        this.monthlyExpenseInYearList = [];
        this.locationExpenseInYearList = [];
    }

    // private getMonthlyExpenseOfYear(year: string) {
    //     this._waterBillService.getMonthlyExpenseOfYear(year, (response) => {
    //         this.monthlyExpenseInYearList = response;
    //         this.createBarChart();
    //     });
    // }

    private createYearCharts(selectedValue: string) {
        this._waterBillService.getMonthlyExpenseOfYear(selectedValue, (response) => {
            this.monthlyExpenseInYearList = response;
            this.createBarChart(
                this.monthlyExpenseInYearList.map(monthlyExpense => [monthlyExpense.expense]),
                this.monthlyExpenseInYearList.map(monthlyExpense => [monthlyExpense.month])
            );
        });
        this._waterBillService.getLocationExpenseOfYear(selectedValue, (response) => {
            this.locationExpenseInYearList = response;
            this.createPieChart(
                this.locationExpenseInYearList.map(locationExpense => [locationExpense.expense]),
                this.locationExpenseInYearList.map(locationExpense => [locationExpense.location])
            );
        });
    }

    private createMonthCharts(selectedValue: string) {
        var month = this.getMonthIndex(selectedValue);
        this._waterBillService.getYearlyExpenseOfMonth(month, (response) => {
            this.yearlyExpenseOfMonthList = response;
            this.createBarChart(
                this.yearlyExpenseOfMonthList.map(yearlyExpense => [yearlyExpense.expense]),
                this.yearlyExpenseOfMonthList.map(yearlyExpense => [yearlyExpense.year])
            );
        });
        this._waterBillService.getLocationExpenseOfMonth(month, (response) => {
            this.locationExpenseInYearList = response;
            this.createPieChart(
                this.locationExpenseInYearList.map(locationExpense => [locationExpense.expense]),
                this.locationExpenseInYearList.map(locationExpense => [locationExpense.location])
            );
        });
    }

    private clearCharts() {
        this.chartDatasetsBar = [];
        this.chartLabelsBar = [];
        this.chartDatasetsPie = [];
        this.chartLabelsPie = [];
        // this.monthlyExpenseInYearList = [];
        // this.yearlyExpenseOfMonthList = [];
        // this.locationExpenseInYearList = [];
    }

    private getMonthIndex(month: string){
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December' ];
        var index = monthNames.indexOf(month) + 1 ;
        var formattedNumber = ("0" + index).slice(-2);
        return formattedNumber;
    }
}

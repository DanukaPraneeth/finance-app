import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-reports-electricity-bill',
    templateUrl: './reports-electricity.component.html',
    styleUrls: ['./reports-electricity.component.scss']
})
export class ReportsElectricityComponent implements OnInit {

    private chartTypeBar: string;
    private chartDatasetsBar: Array<any>;
    private chartLabelsBar: Array<any>;
    private chartColorsBar: Array<any>;
    private chartOptionsBar: any;
    private chartTypePie: string;
    private chartDatasetsPie: Array<any>;
    private chartLabelsPie: Array<any>;
    private chartColorsPie: Array<any>;
    private chartOptionsPie: any;
    private chartTypeLine: string;
    private chartDatasetsLine: Array<any>;
    private chartLabelsLine: Array<any>;
    private chartColorsLine: Array<any>;
    private chartOptionsLine: any;

    constructor() {
    }

    ngOnInit() {

        this.createPieChart();
        this.createBarChart();
        this.createLineChart();

    }

    createPieChart() {
        this.chartTypePie = 'pie';

        this.chartDatasetsPie = [
            {data: [300, 50, 100, 40, 120], label: 'Electricity consumption by Location'}
        ];

        this.chartLabelsPie = ['Library', 'Hall 01', 'Hall 02', 'Canteen', 'Auditorium',];

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

    createBarChart() {

        this.chartTypeBar = 'bar';

        this.chartDatasetsBar = [
            {
                data: [2105, 3259, 1680, 2181, 1956, 1855, 2105, 3259, 1680, 2181, 1956, 1855],
                label: 'Electricity Consumption by Rupees'
            }
        ];

        this.chartLabelsBar = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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

}

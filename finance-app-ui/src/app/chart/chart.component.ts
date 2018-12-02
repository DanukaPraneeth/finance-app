import {Component, NgZone, OnInit} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    private chart: am4charts.XYChart;

    constructor(private zone: NgZone) {
    }

    ngOnInit() {


        this.zone.runOutsideAngular(() => {
            let chart = am4core.create("chartdiv", am4charts.XYChart);

            chart.paddingRight = 20;

            chart.data = [{
                "country": "January",
                "visits": 2025
            }, {
                "country": "February",
                "visits": 1882
            }, {
                "country": "March",
                "visits": 1809
            }, {
                "country": "April",
                "visits": 1322
            }, {
                "country": "May",
                "visits": 1114
            }, {
                "country": "Juny",
                "visits": 984
            }, {
                "country": "July",
                "visits": 711
            }, {
                "country": "August",
                "visits": 665
            }, {
                "country": "september",
                "visits": 580
            }, {
                "country": "October",
                "visits": 443
            }, {
                "country": "November",
                "visits": 441
            }, {
                "country": "December",
                "visits": 395
            }];

            let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "country";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;

            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
            let series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = "visits";
            series.dataFields.categoryX = "country";
            series.name = "Visits";
            series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
            series.columns.template.fillOpacity = .8;

            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;


            this.chart = chart;
        });
    }

    // ngOnDestroy() {
    //     this.zone.runOutsideAngular(() => {
    //         if (this.chart) {
    //             this.chart.dispose();
    //         }
    //     });
    // }

}

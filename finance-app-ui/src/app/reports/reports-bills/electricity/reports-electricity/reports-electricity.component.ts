import {Component, NgZone, OnInit} from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-reports-electricity-bill',
  templateUrl: './reports-electricity.component.html',
  styleUrls: ['./reports-electricity.component.scss']
})
export class ReportsElectricityComponent implements OnInit {

  private pieChart: am4charts.PieChart;
  private barChart: am4charts.XYChart;
  private comparisonChart: am4charts.XYChart

  constructor(private zone: NgZone) {
  }

  ngOnInit() {

    this.createPieChart();
    this.createBarChart();
    this.createComaprisonChart();

  }

  createPieChart(){
    let chart = am4core.create("chartdivx", am4charts.PieChart);
    chart.data = [{
      "bill": "Library",
      "value": 501.9
    }, {
      "bill": "Hall 01",
      "value": 301.9
    }, {
      "bill": "Hall 02",
      "value": 201.1
    }, {
      "bill": "Canteen 01",
      "value": 165.8
    }, {
      "bill": "Auditorium",
      "value": 139.9
    }];

    let pieSeries = chart.series.push(new am4charts.PieSeries());

    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "bill";
    this.pieChart = chart;
  }

  createBarChart(){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.paddingRight = 20;

      chart.data = [{
        "country": "Jan",
        "visits": 2025
      }, {
        "country": "Feb",
        "visits": 1882
      }, {
        "country": "Mar",
        "visits": 1809
      }, {
        "country": "Apr",
        "visits": 1322
      }, {
        "country": "May",
        "visits": 1114
      }, {
        "country": "Jun",
        "visits": 984
      }, {
        "country": "Jul",
        "visits": 711
      }, {
        "country": "Aug",
        "visits": 665
      }, {
        "country": "Sep",
        "visits": 580
      }, {
        "country": "Oct",
        "visits": 443
      }, {
        "country": "Nov",
        "visits": 441
      }, {
        "country": "Dec",
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


      this.barChart = chart;
    });
  }

  private createComaprisonChart() {
    let chart = am4core.create("chartdivCompare", am4charts.XYChart);

// Add data
chart.data = [{
  "month": "Jan",
  "lastyear": 2500,
  "thisyear": 2100
},{
  "month": "Feb",
  "lastyear": 1800,
  "thisyear": 2600
},{
  "month": "Mar",
  "lastyear": 1900,
  "thisyear": 2900
},{
  "month": "Apr",
  "lastyear": 1700,
  "thisyear": 2700
},{
  "month": "May",
  "lastyear": 2900,
  "thisyear": 1000
},{
  "month": "Jun",
  "lastyear": 2500,
  "thisyear": 2100
},{
  "month": "Jul",
  "lastyear": 1800,
  "thisyear": 2600
},{
  "month": "Aug",
  "lastyear": 1900,
  "thisyear": 2900
},{
  "month": "Sep",
  "lastyear": 1700,
  "thisyear": 2700
},{
  "month": "Oct",
  "lastyear": 2900,
  "thisyear": 1000
},{
  "month": "Nov",
  "lastyear": 1700,
  "thisyear": 2700
},{
  "month": "Dec",
  "lastyear": 2900,
  "thisyear": 1000
}];

// Create axes
let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "month";
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

let  valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.opposite = true;

// Create series
function createSeries(field, name) {
  let series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueX = field;
  series.dataFields.categoryY = "month";
  series.name = name;
  series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
  series.columns.template.height = am4core.percent(100);
  series.sequencedInterpolation = true;

  let valueLabel = series.bullets.push(new am4charts.LabelBullet());
  valueLabel.label.text = "{valueX}";
  valueLabel.label.horizontalCenter = "left";
  valueLabel.label.dx = 10;
  valueLabel.label.hideOversized = false;
  valueLabel.label.truncate = false;

  let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
  categoryLabel.label.text = "{name}";
  categoryLabel.label.horizontalCenter = "right";
  categoryLabel.label.dx = -10;
  categoryLabel.label.fill = am4core.color("#fff");
  categoryLabel.label.hideOversized = false;
  categoryLabel.label.truncate = false;
}

createSeries("lastyear", "2017");
createSeries("thisyear", "2018");
  }
}

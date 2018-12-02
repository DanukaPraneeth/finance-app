import {Component, NgZone, OnInit} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  private chart: am4charts.PieChart;

  ngOnInit() {

    let chart = am4core.create("chartdivx", am4charts.PieChart);
    chart.data = [{
      "bill": "Electricity",
      "value": 501.9
    }, {
      "bill": "Internet",
      "value": 301.9
    }, {
      "bill": "Water",
      "value": 201.1
    }, {
      "bill": "Telephone",
      "value": 165.8
    }, {
      "bill": "Other",
      "value": 139.9
    }];

    let pieSeries = chart.series.push(new am4charts.PieSeries());

    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "bill";
  }

}

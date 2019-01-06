import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-list',
  templateUrl: './charts-list.component.html',
  styleUrls: ['./charts-list.component.scss']
})
export class ChartsListComponent implements OnInit {

  typeString: string [] = ["", "Electricity", "Telephone", "Water"];
  selectedType: string;
  isElectricity: boolean;
  isWater: boolean;
  isInternet: boolean;
  isTelephone: boolean;

  constructor() { }

  ngOnInit() {
    this.selectedType = "";
    this.clearAll();
  }

  public onTypeSelected(event) {
    this.selectedType = event.target.value;
    this.clearAll();

    switch (this.selectedType) {
      case "Electricity": {
        this.isElectricity = true;
        break;
      }
      case "Water": {
        this.isWater = true;
        break;
      }
      case "Telephone": {
        this.isTelephone = true;
        break;
      }
      case "Internet": {
        this.isInternet = true;
        break;
      }
      default: {
        this.clearAll();
        break;
      }
    }
  }

  clearAll() {
    this.isElectricity = false;
    this.isInternet = false;
    this.isWater = false;
    this.isTelephone = false;
  }

}

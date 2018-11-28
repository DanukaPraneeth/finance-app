import {Component, OnInit} from "@angular/core";
import {AppCommonService} from "../services/app-common.service";

@Component({
  selector: "app-hamburger-menu",
  templateUrl: "./hamburger-menu.component.html",
  styleUrls: ["./hamburger-menu.component.scss"]
})
export class HamburgerMenuComponent implements OnInit {

  private isClicked = false;

  constructor(private _appCommonService: AppCommonService) {
  }

  ngOnInit() {
  }

  onClick() {
    this.isClicked = !this.isClicked;
    this._appCommonService.updateMenuToggleStream(this.isClicked);
  }

}

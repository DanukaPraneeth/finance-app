import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../models/data-models";
import {AppCommonService} from "../services/app-common.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  private selectedMenu: MenuItem;
  private isExpand = false;

  private menuSource: MenuItem[] = [
    { id: 1, route: '/home', name: 'Home', position: 'parent', iconName: 'home', pattern: '*' },
    { id: 2, route: '/', name: 'Bill', position: 'parent has-child', iconName: 'blur_linear', pattern: '*' },
    { id: 3, route: '/bill/create', position: 'child', name: 'Create Bill', iconName: 'add_box', pattern: '*' },
    { id: 4, route: '/bill/view', position: 'child', name: 'View Bill', iconName: 'pageview', pattern: '*' },
    { id: 5, route: 'certify', position: 'child', name: 'Certifiy Bill', iconName: 'check_circle', pattern: '1' },
  ];


  constructor(private _appCommonService: AppCommonService,
              private _router: Router) {
  }

  ngOnInit() {

    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedMenu = this.menuSource.filter((menu) => menu.route == event.url)[0];
      }
    });

    this.selectedMenu = this.menuSource[0];

    this._appCommonService.menuToggleStream.subscribe((flag) => this.isExpand = flag);
  }

  onClick(menu: any) {
    this.selectedMenu = menu;
    this._router.navigate([menu.route]);
  }

}

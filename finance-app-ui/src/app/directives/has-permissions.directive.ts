import {Directive, SimpleChanges} from "@angular/core";
import {OnChanges, OnInit} from "@angular/core/src/metadata/lifecycle_hooks";

@Directive({
  selector: '[appHasPermissions]'
})
export class HasPermissionsDirective implements OnInit, OnChanges {

  // @Input('appHasPermissions') permissionPattern: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getPermisions();
  }

  ngOnInit(): void {

  }

  private getPermisions(): void {
    // if (this._as.hasPermissions(this.permissionPattern)) {
    // if (true) {
    //   this._container.createEmbeddedView(this._templateRef);
    // } else {
    //   this._container.clear();
    // }
  }
}

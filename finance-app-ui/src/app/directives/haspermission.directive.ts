import {Directive, ElementRef, Input, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Directive({
  selector: '[appHaspermission]'
})
export class HaspermissionDirective {

  // constructor(el: ElementRef) {
  //   el.nativeElement.style.backgroundColor = 'yellow';
  // }

  // @Input('appHaspermission') permissionPattern: string;

  constructor(private _as: AuthenticationService, private _templateRef: TemplateRef<any>, private _viewContainer: ViewContainerRef) { }

  private hasPermission = false;

  @Input() set appHaspermission(permissionPattern: string) {
    if (this._as.hasPermissions(permissionPattern)) {
      this._viewContainer.createEmbeddedView(this._templateRef);
      this.hasPermission = true;
    } else {
      this._viewContainer.clear();
      this.hasPermission = false;
    }
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.getPermisions();
  // }
  // ngOnInit(): void {
  //
  // }
  //
  // private getPermisions(): void {
  //   if (this._as.hasPermissions(this.permissionPattern)) {
  //     this._container.createEmbeddedView(this._templateRef);
  //   } else {
  //     this._container.clear();
  //   }
  // }

}

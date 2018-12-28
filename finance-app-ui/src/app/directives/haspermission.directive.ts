import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";

@Directive({
    selector: '[appHaspermission]'
})
export class HaspermissionDirective {

    constructor(private _as: AuthenticationService, private _templateRef: TemplateRef<any>, private _viewContainer: ViewContainerRef) {
    }

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

}

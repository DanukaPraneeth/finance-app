import {Injectable} from "@angular/core";
import {ToastOptions, ToastyConfig, ToastyService} from "ng2-toasty";

@Injectable()
export class MessageService {

    constructor(private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
        this.toastyConfig.theme = 'material';
    }

    toastOptions: ToastOptions = <ToastOptions>{
        title: "",
        msg: "",
        showClose: true,
        timeout: 7000,
        theme: "material"
    };


    success(message: string, title?: string[]) {
        this.toastyService.success(Object.assign({}, this.toastOptions, {title, msg: message}));
    }

    error(message: string, title?: string) {
        this.toastyService.error(Object.assign({}, this.toastOptions, {title, msg: message}));
    }

    warning(message: string, title?: string) {
        this.toastyService.warning(Object.assign({}, this.toastOptions, {title, msg: message}));
    }

    info(message: string, title?: string) {
        this.toastyService.info(Object.assign({}, this.toastOptions, {title, msg: message}));
    }

}

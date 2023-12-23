import { Component } from "@angular/core";


@Component({
    selector: "success-server",
    templateUrl: "./success.component.html",
    styleUrls: ["./success.component.css"],
    standalone: true
}
)
export class SuccessComponent{

    message = "Success!"

}
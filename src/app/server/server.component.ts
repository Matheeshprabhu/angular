import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class ServerComponent{

    constructor() { }

    ngOnInit(): void {
    }
}
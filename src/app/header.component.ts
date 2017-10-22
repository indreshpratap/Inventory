
import { Component, Input } from "@angular/core";

@Component({
    selector: "app-header",
    template: `<h1>{{header}}</h1>
<button (click)="openLogin()">Login</button>
`,
})
export class HeaderComponent {

    @Input()
    header: string;
    constructor() {
        this.header = "Header component";
    }

    openLogin() {
       alert("Opening login popup");
    }
}
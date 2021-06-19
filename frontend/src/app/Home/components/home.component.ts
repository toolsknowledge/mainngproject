import { Component } from "@angular/core";
@Component({
    selector : "home",
    templateUrl : "./home.component.html"
})
export class HomeComponent{
    message:any;
    constructor(){
        this.message = "Products Soon....from State Management";
    }
}
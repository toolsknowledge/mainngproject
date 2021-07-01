import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : "detail",
    templateUrl:"./detail.component.html"
})
export default class DetailComponent{
    message:string;
    constructor(private route:ActivatedRoute){
        console.log( this.route.snapshot.params.id );
        this.message = this.route.snapshot.params.id;
    }
}
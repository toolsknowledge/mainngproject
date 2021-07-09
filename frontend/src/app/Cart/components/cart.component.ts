import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:"cart",
    templateUrl:"./cart.component.html"
})
export class cartComponent{
    msg:any;
    constructor(private route:ActivatedRoute){
        //route.snapshot.params["id"]
        this.msg = route.snapshot.params["id"]+"..."+route.snapshot.params["qty"];
    }
}
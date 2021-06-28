//this component will receives the "rating" as well as "numReviews" from "parent" component
import { Component, Input } from "@angular/core";

@Component({
    selector : "rating_bar",
    templateUrl : "./rating.component.html"
})
export class RatingComponent{
    @Input() product_rating;
    @Input() numReviews;
    constructor(){
        console.log("in constructor");
    }
    
}
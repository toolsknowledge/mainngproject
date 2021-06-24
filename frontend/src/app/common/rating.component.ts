//this component will receives the "rating" as well as "numReviews" from "parent" component
import { Component, Input } from "@angular/core";

@Component({
    selector : "rating_bar",
    templateUrl : "./rating.component.html"
})
export class RatingComponent{
    @Input() rating_value;
    @Input() numReviews;
}
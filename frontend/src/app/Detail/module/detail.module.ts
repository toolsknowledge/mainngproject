import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgHttpLoaderModule } from "ng-http-loader";
import { RatingComponent } from "../../common/rating.component";
import DetailComponent from "../components/detail.component";

@NgModule({
    declarations:[DetailComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:DetailComponent}]),
             FormsModule],
    providers:[],
    exports:[DetailComponent]
})
export class DetailModule{}

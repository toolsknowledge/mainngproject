import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgHttpLoaderModule } from "ng-http-loader";
import { RatingComponent } from "src/app/common/rating.component";
import DetailComponent from "../components/detail.component";

@NgModule({
    declarations:[DetailComponent
                 ],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:DetailComponent}]),
             NgHttpLoaderModule.forRoot()
             ],
    providers:[],
    exports:[DetailComponent]
})
export class DetailModule{}

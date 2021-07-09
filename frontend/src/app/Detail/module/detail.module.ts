import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgHttpLoaderModule } from "ng-http-loader";
import { sharedModule } from "src/app/common/shared.module";

import DetailComponent from "../components/detail.component";

@NgModule({
    declarations:[DetailComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:DetailComponent}]),
             FormsModule,
             sharedModule,
             NgHttpLoaderModule.forRoot()],
    providers:[],
    exports:[DetailComponent]
})
export class DetailModule{}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import DetailComponent from "../components/detail.component";

@NgModule({
    declarations:[DetailComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:DetailComponent}])],
    providers:[],
    exports:[DetailComponent]
})
export class DetailModule{}
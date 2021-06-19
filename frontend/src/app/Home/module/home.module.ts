import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "../components/home.component";
@NgModule({
    declarations:[HomeComponent],
    imports:[CommonModule,RouterModule.forChild([{path:"",component:HomeComponent}])],
    providers:[],
    exports:[HomeComponent]
})
export class HomeModule{}
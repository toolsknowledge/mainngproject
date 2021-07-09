import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { cartComponent } from "../components/cart.component";

@NgModule({
    declarations:[cartComponent],
    imports:[CommonModule,RouterModule.forChild([{path:"",component:cartComponent}])],
    providers:[],
    exports:[cartComponent]
})
export class cartModule{}
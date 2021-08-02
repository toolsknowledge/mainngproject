import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PaymentComponent } from "../components/payment.component";
@NgModule({
    declarations:[PaymentComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:PaymentComponent}])],
    providers:[],
    exports:[PaymentComponent]
})
export class PaymentModule{}
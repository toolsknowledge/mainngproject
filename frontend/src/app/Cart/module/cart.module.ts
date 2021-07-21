import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgHttpLoaderModule } from "ng-http-loader";
import { sharedModule } from "src/app/common/shared.module";
import { cartComponent } from "../components/cart.component";
import { CartEffets } from "../effects/cart.effects";
import { cartReducer } from "../reducer/cart.reducer";
import CartService from "../services/cart.service";

@NgModule({
    declarations:[cartComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:cartComponent}]),
             HttpClientModule,
            //  StoreModule.forRoot({"cart":cartReducer}),
            //  EffectsModule.forRoot([CartEffets]),
            // StoreModule.forRoot({}),
            StoreModule.forFeature("cart",{"cart":cartReducer}),
            // EffectsModule.forRoot([]),
            EffectsModule.forFeature([CartEffets]),
            
            NgHttpLoaderModule.forRoot()],
    providers:[CartService],
    exports:[cartComponent]
})
export class cartModule{}
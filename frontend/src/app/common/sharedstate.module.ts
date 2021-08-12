import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cartReducer } from "../Cart/reducer/cart.reducer"
import { CartEffets } from "../Cart/effects/cart.effects";
import { CommonModule } from '@angular/common';
@NgModule({
    imports:[
        CommonModule,
        StoreModule.forFeature("cart",{"cart":cartReducer}),
        EffectsModule.forFeature([CartEffets])
    ]
})
export class SharedStateModule{}
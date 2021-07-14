import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgHttpLoaderModule } from "ng-http-loader";
import { sharedModule } from "src/app/common/shared.module";

import {DetailComponent} from "../components/detail.component";
import { detailsEffects } from "../effects/detail.effects";
import { DetailReducer } from "../reducer/detail.reducer";
import { DetailService } from "../service/detail.service";

@NgModule({
    declarations:[DetailComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild([{path:"",component:DetailComponent}]),
             FormsModule,
             sharedModule,
             NgHttpLoaderModule.forRoot(),
             StoreModule.forRoot({"detail":DetailReducer}),
             EffectsModule.forRoot([detailsEffects])],
    providers:[DetailService],
    exports:[DetailComponent]
})
export class DetailModule{}

import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgHttpLoaderModule } from "ng-http-loader";
import { sharedModule } from "src/app/common/shared.module";
import { HomeComponent } from "../components/home.component";
import { HomeEffects } from "../effects/home.effects";
import { HomeReducer } from "../reducer/home.reducer";
import { ProductService } from "../service/product.service";
@NgModule({
    declarations:[HomeComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:HomeComponent}]),
             StoreModule.forRoot({"home":HomeReducer}),
             EffectsModule.forRoot([HomeEffects]),
             HttpClientModule,
             sharedModule,
             NgHttpLoaderModule.forRoot()],
    providers:[ProductService],
    exports:[HomeComponent]
})
export class HomeModule{}
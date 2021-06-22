import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { HomeAction,HomeActionTypes,ProductsLoadingFail,ProductsLoadingSucccess } from "../actions/home.actions";
import { ProductService } from "../service/product.service";
import { catchError, mergeMap,map } from "rxjs/operators";
import { Product } from "../model/product.model";

@Injectable({
    providedIn : "root"
})
export class HomeEffects{
    constructor(private service:ProductService,
                private actions:Actions){}
    @Effect()
    public getProducts:Observable<Action> = this.actions.pipe(
        ofType(HomeAction.ProductsLoading),
        mergeMap(()=>this.service.getProducts().pipe(map((posRes:Product[])=>{
            return new ProductsLoadingSucccess(posRes)
        }),catchError((err)=> of(new ProductsLoadingFail("Network Error")))))
    )
}
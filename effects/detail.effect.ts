import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { ProductService } from "../service/product.service";
import { catchError, mergeMap,map } from "rxjs/operators";
import { Product } from "../model/product.model";
import * as allActions from "../.";
@Injectable({
    providedIn : "root"
})
export class DetailEffects{
    constructor(private service:ProductService,
                private actions:Actions){}
    @Effect()
    public getDetails:Observable<Action> = this.actions.pipe(
        ofType(allActions.HomeAction.ProductsLoading),
        mergeMap(()=>this.service.getProducts().pipe(map((posRes:Product[])=>{
            return new allActions.ProductsLoadingSucccess(posRes)
        }),catchError((err)=> of(new allActions.ProductsLoadingFail("Network Error")))))
    )
}
























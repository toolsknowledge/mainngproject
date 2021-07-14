import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { DetailService } from "../service/detail.service";
import * as allActions from "../.";
import { catchError, mergeMap,map, switchMap } from "rxjs/operators";
import { Product } from "../model/detail.model";


@Injectable({
    providedIn:"root"
})
export class detailsEffects{
    constructor(private service:DetailService,
                private actions:Actions){}

    @Effect()
    public getDetailProduct:Observable<Action> = this.actions.pipe(
        ofType(allActions.DetailAction.ProductLoading),
        mergeMap((action:any)=>{
            return this.service.getProductDetails(action.id).pipe(map((posRes:Product)=>{
                return new allActions.ProductLoadingSucccess(posRes);
            }),catchError((err:any)=>{
                return of(new allActions.ProductLoadingFail("Network Error"));
            }))
        })
    )
};
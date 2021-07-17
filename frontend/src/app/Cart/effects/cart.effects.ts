import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import  CartService  from "../services/cart.service";
import * as allActions from "../.";
import { catchError, mergeMap, map } from "rxjs/operators";
@Injectable({
    providedIn:"root"
})
export class CartEffets{
    constructor(private service:CartService,
                private actions:Actions){
                    
                }
        @Effect()
        public getCartItems:Observable<Action> = this.actions.pipe(
            ofType(allActions.CartActions.CartLoading),
            mergeMap((action:any)=> this.service.getCartData(action.qty)
                    .pipe(map((posRes)=>{
                        posRes["qty"] = action.id;
                        return new allActions.CartLoadingSuccess(posRes);
                    }),catchError((err:any)=>{
                        return of(new allActions.CartLoadingFail("Network Error"))
                    })))
        );
};

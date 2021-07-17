import { Action } from "@ngrx/store";
import CartModel from "../model/cart.model";

export enum CartActions{
    CartLoading = "[Cart] Loading",
    CartLoadingSuccess = "[Cart] Loading Success",
    CartLoadingFail = "[Cart] Loading Fail",
    
};

export class CartLoading implements Action{
    public readonly type = CartActions.CartLoading;
    constructor(public id:any, public qty:number){}
};

export class CartLoadingSuccess implements Action{
    public readonly type = CartActions.CartLoadingSuccess;
    constructor(public payload:CartModel){}
};

export class CartLoadingFail implements Action{
    public readonly type = CartActions.CartLoadingFail;
    constructor(public err:any){}  
};



export type CartActionTypes = CartLoading | CartLoadingSuccess | CartLoadingFail;

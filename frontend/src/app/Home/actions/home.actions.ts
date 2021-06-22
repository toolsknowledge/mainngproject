import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

export enum HomeAction{
    ProductsLoading = "[Product] Loading",
    ProductsLoadingSucccess = "[Product] Loading Success",
    ProductsLoadingFail = "[Product] Loading Fail"
}
export class ProductsLoading implements Action{
    public readonly type:HomeAction.ProductsLoading;
}

export class ProductsLoadingSucccess implements Action{
    public readonly type:HomeAction.ProductsLoadingSucccess;
    constructor(public products:Product[]){}
}

export class ProductsLoadingFail implements Action{
    public readonly type:HomeAction.ProductsLoadingFail; 
    constructor(err:string){}  
}

export type HomeActionTypes = ProductsLoading | ProductsLoadingSucccess | ProductsLoadingFail;


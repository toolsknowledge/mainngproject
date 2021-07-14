import { Action } from "@ngrx/store";
import { Product } from "../model/detail.model";

export enum DetailAction{
    ProductLoading = "[Product] Loading",
    ProductLoadingSucccess = "[Product] Loading Success",
    ProductLoadingFail = "[Product] Loading Fail"
}
export class ProductLoading implements Action{
    public readonly type = DetailAction.ProductLoading;
    constructor(public id:any){}
}

export class ProductLoadingSucccess implements Action{
    public readonly type = DetailAction.ProductLoadingSucccess;
    constructor(public product:Product){}
}

export class ProductLoadingFail implements Action{
    public readonly type = DetailAction.ProductLoadingFail; 
    constructor(public err:string){}  
}

export type DetailActionTypes = ProductLoading | ProductLoadingSucccess | ProductLoadingFail;
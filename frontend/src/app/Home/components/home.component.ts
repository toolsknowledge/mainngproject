import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { IState } from "../reducer/home.reducer";
import * as allActions from "../.";
import { Product } from "../model/product.model";
@Component({
    selector : "home",
    templateUrl : "./home.component.html"
})
export class HomeComponent{
    message:any;
    loading:boolean;
    products:Product[];
    error:string;

    //dispatch & subscription
    constructor(private store:Store<IState>){
        //this.message = "Products Soon....from State Management";
    }

    ngOnInit(){
        //dispatch
        this.store.dispatch(new allActions.ProductsLoading());

        //subscription
        const result = this.store.pipe(select(allActions.allProducts));

        result.subscribe((res)=>{
            this.loading = res.loading;
            this.products = res.products;
            this.error = res.error;
        })
    }


}
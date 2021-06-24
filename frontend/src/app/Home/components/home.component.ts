import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { IState } from "../reducer/home.reducer";
import * as allActions from "../.";
import { Product } from "../model/product.model";
import { SpinnerVisibilityService } from "ng-http-loader";
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
    constructor(private store:Store<IState>,
                private spinner:SpinnerVisibilityService){
        //this.message = "Products Soon....from State Management";
    }

    ngOnInit(){
        //dispatch
        this.store.dispatch(new allActions.ProductsLoading());

        //subscription
        this.spinner.show();
        const result = this.store.pipe(select(allActions.allProducts));

        result.subscribe((res)=>{
            this.loading = res.loading;
            this.products = res.products;
            this.error = res.error;
            this.spinner.hide();
        })
    }


}
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import CartInterface from "../reducer/cart.reducer";
import * as allActions from "../.";
import { SpinnerVisibilityService } from "ng-http-loader";
import CartRemove from "../model/cartremove.model";

@Component({
    selector:"cart",
    templateUrl:"./cart.component.html"
})
export class cartComponent{
    qty:any;
    id:any;
    loading:boolean;
    error:string;
    finalArray:any;
    finalArrayItems:number;
    constructor(private route:ActivatedRoute,
                private store:Store<CartInterface>,
                private spinner:SpinnerVisibilityService){
    }

    ngOnInit(){
        this.id = this.route.snapshot.params["id"];
        this.qty = this.route.snapshot.params["qty"];
        
        this.store.dispatch(new allActions.CartLoading(this.id,this.qty));

        this.spinner.show();
        let result = this.store.pipe(select(allActions.cartSelector));
        result.subscribe((res)=>{
            this.loading = res.loading;
            this.error = res.error;
            this.finalArray = res.finalItems;
            this.finalArrayItems = res.finalItems.length;
            //this.finalArrayItems = 0;
            this.spinner.hide();
        });
    }

    deleteItem(id:any){
        //dispatch
        this.store.dispatch({
            type : "CART_REMOVE_ITEM",
            payload : <CartRemove>{
                id:id,
                qty : this.qty
            }
        })
    }
}
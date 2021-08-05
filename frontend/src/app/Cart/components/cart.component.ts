import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    item:any;

    testRes;
    totalPrice;
    myValue:any

    grandTotalNumOfItems:number;
    grandTotalPrice:any;

    constructor(private route:ActivatedRoute,
                private store:Store<CartInterface>,
                private spinner:SpinnerVisibilityService,
                private router:Router){
        console.log(this.myValue);
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

            this.grandTotalNumOfItems = this.finalArray.reduce((accumalator:number,item:any)=> accumalator+item.qty,0);
            this.grandTotalPrice = this.finalArray.reduce((accumalator:number,item:any)=> accumalator+(item.qty*item.price),0);
            console.log(typeof this.grandTotalNumOfItems);


             this.testRes = this.finalArray.reduce((totalItem:any,arg2:any)=> totalItem+arg2.qty,0);
             this.totalPrice = this.finalArray.reduce((totalPrice:any,arg2:any)=> totalPrice+arg2.qty*arg2.price,0);
             //console.log(this.testRes,this.totalPrice);
            this.spinner.hide();
            
        });
    }

    myFun(item:any){
        console.log(item);
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


    proceedToPayment(totalPrice:any){
        console.log(totalPrice);
        this.router.navigate(["/signin"]);
    }
}
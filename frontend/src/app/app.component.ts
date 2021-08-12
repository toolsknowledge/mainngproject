import { Component } from '@angular/core';
import { Store,select } from '@ngrx/store';
import CartInterface from './Cart/reducer/cart.reducer';
import * as allActions from "./Cart/.";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  arr:any;
  str:any;
  finalArray:any[];

  // constructor(private store:Store<CartInterface>){
  //     const result = this.store.pipe(select(allActions.cartSelector));
  //     result.subscribe((res)=>{
  //       this.arr = res.finalItems.length
  //     })
  // }

  constructor(){
      //this.arr = window.localStorage.getItem("cart") === null ? 0 : JSON.parse(window.localStorage.getItem("cart")).length;
  }

}

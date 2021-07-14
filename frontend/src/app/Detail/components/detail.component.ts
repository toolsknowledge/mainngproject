// import { Component } from "@angular/core";
// import { ActivatedRoute, Router } from "@angular/router";
// import { Store } from "@ngrx/store";
// import { SpinnerVisibilityService } from "ng-http-loader";
// import { IState } from "../reducer/detail.reducer";
// @Component({
//     selector : "detail",
//     templateUrl:"./detail.component.html"
// })
// export default class DetailComponent{
//     message:any;
//     qty:number;
//     dropdown_values:number[] = [];
//     constructor(private route:ActivatedRoute,
//                 private route1:Router,
//                 private store:Store<IState>,
//                 private spinner:SpinnerVisibilityService){
//         console.log( this.route.snapshot.params.id );
//         //this.message = this.route.snapshot.params.id;
//         this.qty = 1;
//         this.message = {"_id":"60c6bb7fe83de18c6445c976","image":"https://mainngproject.s3.ap-south-1.amazonaws.com/p1.jpg","name":"Polo Shirt","brand":"Polo","price":100,"rating":1,"description":"This Shirt is Polo Shirt","countInStock":50,"numReviews":10};
//         this.dropdown_values = this.createDropdownValues(this.message.countInStock);
//     }
//     arr:number[] = [];
//     createDropdownValues(count:number){
//         if(count>0){
//             for(let i=1;i<=count;i++){
//                 this.arr.push(i);
//             }
//             return this.arr;
//         }
//     }
//    addToCart(id){
//         console.log(id);
        
//         this.route1.navigate([`/cart/${id}/${this.qty}`]);
//     }


// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IState } from '../reducer/detail.reducer';
import * as allActions from "../.";
import { Product } from '../model/detail.model';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  id:any;
  loading:boolean;
  message:Product;
  error:string;

  //variable
  qty:number;

  dropdown_values:number[]=[];


  //private spinner:SpinnerVisibilityService

  constructor(private routing:ActivatedRoute,
              private store:Store<IState>,
              private router:Router,
              private spinner:SpinnerVisibilityService) { 
      this.qty=1;
  };

  ngOnInit(): void {
      this.id = this.routing.snapshot.params["id"];

      //dispatch
      this.store.dispatch(new allActions.ProductLoading(this.id));


      this.spinner.show();
      //subscription
      let result = this.store.pipe(select(allActions.getProduct));

     
      result.subscribe((res)=>{
         this.loading = res.loading; 
         this.message = res.product;
         this.error = res.error;
         
         

         this.dropdown_values = this.createDropDown(this.message.countInStock);

         
         this.spinner.hide();
      });
  }

  arr:number[] = [];
  createDropDown(count){
    if( count > 0){
      for(let i:number=1;i<=count;i++){
         this.arr.push(i);
      }
    }
    return this.arr;
  }


  addToCart(id:any):any{
      this.router.navigate(["/cart",this.qty,id]);  
  };

}






















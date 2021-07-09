import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector : "detail",
    templateUrl:"./detail.component.html"
})
export default class DetailComponent{
    message:any;
    qty:number;
    dropdown_values:number[] = [];


    constructor(private route:ActivatedRoute,
                private route1:Router){
        console.log( this.route.snapshot.params.id );
        //this.message = this.route.snapshot.params.id;
        this.qty = 1;
        this.message = {"_id":"60c6bb7fe83de18c6445c976","image":"https://mainngproject.s3.ap-south-1.amazonaws.com/p1.jpg","name":"Polo Shirt","brand":"Polo","price":100,"rating":1,"description":"This Shirt is Polo Shirt","countInStock":50,"numReviews":10};
   
        
        this.dropdown_values = this.createDropdownValues(this.message.countInStock);
    
    
    }

    arr:number[] = [];
    createDropdownValues(count:number){
        if(count>0){
            for(let i=1;i<=count;i++){
                this.arr.push(i);
            }
            return this.arr;
        }
    }

    addToCart(id){
        console.log(id);
        this.route1.navigate([`/cart/${id}/${this.qty}`]);
    }


}
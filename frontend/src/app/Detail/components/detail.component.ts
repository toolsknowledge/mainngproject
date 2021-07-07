import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : "detail",
    templateUrl:"./detail.component.html"
})
export default class DetailComponent{
    message:any;
    constructor(private route:ActivatedRoute){
        console.log( this.route.snapshot.params.id );
        //this.message = this.route.snapshot.params.id;
   
        this.message = {"_id":"60c6bb7fe83de18c6445c976","image":"https://mainngproject.s3.ap-south-1.amazonaws.com/p1.jpg","name":"Polo Shirt","brand":"Polo","price":100,"rating":1,"description":"This Shirt is Polo Shirt","countInStock":10};
   
    }


}
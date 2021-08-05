import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
    selector : "signin",
    templateUrl : "./signin.component.html"
})
export class SigninComponent{
    userDetails:FormGroup;
    constructor(){
        this.userDetails = new FormGroup({
            "email" : new FormControl("",[Validators.required]),
            "password" : new FormControl("",[Validators.required])
        })
    }
    login(){
        console.log( this.userDetails.value );
    }
}
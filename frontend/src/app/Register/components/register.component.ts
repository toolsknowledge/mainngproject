import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
    selector:"register",
    templateUrl:"./register.component.html"
})
export class RegisterComponent{
    registerForm:FormGroup;
    constructor(){
        this.registerForm = new FormGroup({
            "name" : new FormControl("",[Validators.required]),
            "email" : new FormControl("",[Validators.required]),
            "password" : new FormControl("",[Validators.required]),
            "confirmPassword" : new FormControl("",[Validators.required])
        })
    }
    register(){
        console.log(this.registerForm.value);
    }
}
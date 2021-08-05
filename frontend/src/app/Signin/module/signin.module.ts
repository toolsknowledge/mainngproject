import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SigninComponent } from "../components/signin.component";
@NgModule({
    declarations:[SigninComponent],
    imports:[CommonModule,RouterModule.forChild([{path:"",component:SigninComponent}]),FormsModule,ReactiveFormsModule],
    providers:[],
    exports:[SigninComponent]
})
export class SigninModule{}
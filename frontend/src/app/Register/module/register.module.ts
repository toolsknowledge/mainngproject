import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "../components/register.component";
@NgModule({
    declarations:[RegisterComponent],
    imports:[CommonModule,RouterModule.forChild([{path:"",component:RegisterComponent}]),FormsModule,ReactiveFormsModule],
    providers:[],
    exports:[RegisterComponent]
})
export class RegisterModule{}
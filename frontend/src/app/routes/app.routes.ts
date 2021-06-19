import { Routes } from "@angular/router";

export const appRoutes:Routes = [
    {path:"",loadChildren:()=>import("../Home/module/home.module").then(obj=>obj.HomeModule)}
];

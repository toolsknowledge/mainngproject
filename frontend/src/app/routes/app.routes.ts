import { Routes } from "@angular/router";
export const appRoutes:Routes = [
    {path:"",loadChildren:()=>import("../Home/module/home.module").then(obj=>obj.HomeModule)},
    {path:"detail/:id",loadChildren:()=>import("../Detail/module/detail.module").then(obj=>obj.DetailModule)}
];

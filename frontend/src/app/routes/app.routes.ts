import { Routes } from "@angular/router";
export const appRoutes:Routes = [
    {path:"",loadChildren:()=>import("../Home/module/home.module").then(obj=>obj.HomeModule)},
    {path:"detail/:id",loadChildren:()=>import("../Detail/module/detail.module").then(obj=>obj.DetailModule)},
    {path:"cart",loadChildren:()=>import("../Cart/module/cart.module").then(obj=>obj.cartModule)},
    {path:"cart/:id/:qty",loadChildren:()=>import("../Cart/module/cart.module").then(obj=>obj.cartModule)},
    {path:"payment",loadChildren:()=>import("../Payment/module/payment.module").then(obj=>obj.PaymentModule)},
    {path:"signin",loadChildren:()=>import("../Signin/module/signin.module").then(obj=>obj.SigninModule)},
    {path:"register",loadChildren:()=>import("../Register/module/register.module").then(obj=>obj.RegisterModule)}
];

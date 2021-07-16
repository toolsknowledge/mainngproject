import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import CartModel from "../model/cart.model";

@Injectable({
    providedIn:"root"
})
export default class CartService{
    constructor(private http:HttpClient){}
    public getCartData(id:any):Observable<CartModel>{
        return this.http.get<CartModel>(`${process.env.baseURL}/products/${id}`);
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import CartModel from "../model/cart.model";
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn:"root"
})
export default class CartService{
    constructor(private http:HttpClient){}
    public getCartData(id:any):Observable<CartModel>{
        return this.http.get<CartModel>(`http://localhost:8080/api/products/${id}`);
    }
}
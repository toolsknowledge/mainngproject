import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/product.model";
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn:"root"
})

export class ProductService{
    constructor(private http:HttpClient){
    }

    public getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(environment.baseURL+"/api/products");
    }

};
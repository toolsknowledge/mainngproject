import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/detail.model";
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn:"root"
})

export class DetailService{
    constructor(private http:HttpClient){
    }

    public getProductDetails(id:any):Observable<Product>{
        return this.http.get<Product>(environment.baseURL+`/products/${id}`);
    }

};
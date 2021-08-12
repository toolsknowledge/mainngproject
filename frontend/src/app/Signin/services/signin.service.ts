import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import Signin from "../model/signin.model";

@Injectable({
    providedIn:"root"
})
export default class SigninService{
    constructor(private http:HttpClient){}
    public signin(login_details:any):Observable<Signin>{
        return this.http.post<Signin>(environment.baseURL+"/users/signin",login_details);
    }
}
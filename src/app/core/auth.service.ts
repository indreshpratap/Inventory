import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { environment } from "environments/environment";

@Injectable()
export class AuthService {
    private loggedIn = false;

    constructor(private http: Http) {

    }


    doLogin(details) {
        this.loggedIn = false;
        return this.http.post(environment.apiPath + 'login', details).map(res => {
            let data = res.json();
            if (data.status) {
                this.loggedIn = true;
                localStorage.setItem("session_token","Bearer "+data.token);
            }
            return data;
        });
    }


    isLoggedIn() {
        return this.http.get(environment.apiPath +"checklogin").map(res=>{
            let data = res.json();
            console.log("checklogin",data);
              if (data.status) {
                this.loggedIn = true;

            }else {
                this.loggedIn = false;
            }
            return this.loggedIn;
        })
       
    }

}
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
    private loggedIn = false;

    private userData;

    constructor(private http: Http) {

    }


    doLogin(details) {
        this.loggedIn = false;
        return this.http.post(environment.apiPath + 'login', details).map(res => {
            let data = res.json();
            if (data.status) {
                this.loggedIn = true;
                this.userData = data.data;
                localStorage.setItem("session_token","Bearer "+data.token);
            }
            return data;
        });
    }

    doLogout() {
        localStorage.removeItem("session_token");
        return Observable.of(true);
    }


    isLoggedIn() {
        return this.http.get(environment.apiPath +"checklogin").map(res=>{
            let data = res.json();
              if (data.status) {
                this.loggedIn = true;
                this.userData = data.data;

            }else {
                this.loggedIn = false;
            }
            return this.loggedIn;
        })
       
    }

    get isAdmin() {
        return this.userData && this.userData.role==='admin';
    }

    get isUser() {
        return this.userData && this.userData.role==='user';
    }

}
import { Injectable } from "@angular/core";
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Injectable()
export class HttpAuthFactory extends Http {

  constructor(protected _backend: XHRBackend, protected _defaultOptions: RequestOptions,private router: Router) {
    super(_backend, _defaultOptions);
  }

 


  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    let token = localStorage.getItem('session_token');
    
    if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
      if (!options) {
        // let's make option object
        options = { headers: new Headers() };
      }
      options.headers.set('authorization', token);
      
    } else {
      // we have to add the token to the url object
      url.headers.set('authorization', token);
    }
      // return super.request(url, options);
    return super.request(url, options).catch(this.catchAuthError());
  }

  private catchAuthError() {
    console.log("coming to auth error");
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      console.log("get me sres",res);
      if (res.status === 401 || res.status === 403) {
      
       
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
        return Observable.throw(res);
      }
    };
  }



}
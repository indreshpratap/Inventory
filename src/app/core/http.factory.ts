import { Injectable } from "@angular/core";
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpAuthFactory extends Http {

  constructor(protected _backend: XHRBackend, protected _defaultOptions: RequestOptions) {

    super(_backend, _defaultOptions);
  }

  _setCustomHeaders(options?: RequestOptionsArgs):RequestOptionsArgs{
    if(!options) {
      options = new RequestOptions({});
    }
    if(localStorage.getItem("session_token")) {

      if (!options.headers) {

        options.headers = new Headers();


      }
      options.headers.set("Authorization", localStorage.getItem("session_token"))
    }
    return options;
  }


  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    options = this._setCustomHeaders(options);
    return super.request(url, options)
  }
}
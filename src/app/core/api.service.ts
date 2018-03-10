import { PreloaderService } from './../shared/preloader.service';
import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { finalize, map } from 'rxjs/operators';
import { logging } from 'selenium-webdriver';

@Injectable()
export class ApiService {
  private baseUrl = `http://conduit.productionready.io/api/`;

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
  });

  constructor( private http: Http ) { }

  get(url: string, typeModel: any, options?: any) {
    options = options || {};
    url = this.baseUrl + url;

    if ( !options.hasOwnProperty('headers') ) {
      options.headers = this.headers;
    }

    return this.http.get(url, options)
      .pipe(
        map((res: Response) => {
          return <typeof typeModel>res.json();
        })
      );
  }

  post(url: string, data: any, options?: any) {
    options = options || {};
    url = this.baseUrl + url;

    if ( !options.hasOwnProperty('headers') ) {
      options.headers = this.headers;
    }

    return this.http.post(url, options)
      .pipe(
        map((res: Response) => {
          return res.json();
        })
      );
  }

}

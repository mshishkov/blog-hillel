import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { finalize, map } from 'rxjs/operators';
import { logging } from 'selenium-webdriver';

@Injectable()
export class ApiService {

  constructor(private http: Http ) { }

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
  });

  get(url: string, typeModel: any, options?: any) {
    options = options || {};

    if ( !options.hasOwnProperty('headers') ) {
      options.headers = this.headers;
    }

    console.log('Show loader');
    return this.http.get(url, options)
      .pipe(
        finalize( () => console.log( 'Hide loader' ))
      ).pipe(
        map((res: Response) => {
          return <typeof typeModel>res.json();
        })
      );
  }


}

import { PreloaderService } from './../shared/preloader.service';
import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { finalize, map, catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Notify } from '../shared/models/notify';
import { NotificationService } from './notification.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ApiService {
  private baseUrl = `http://conduit.productionready.io/api/`;
  private user = {username: 'Max', token: 'new-token'};
  private moskUser: BehaviorSubject<any> = new BehaviorSubject(this.user);

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
  });

  constructor(
    private http: Http,
    private notificationService: NotificationService
  ) { }

  get(url: string, typeModel: any, options?: any) {
    options = options || {};
    url = this.baseUrl + url;

    if ( !options.hasOwnProperty('headers') ) {
      options.headers = this.headers;
    }

    return this.http
      .get(url, options)
      .pipe(
        catchError(this.handleHttpError)
      )
      .pipe(
        map((res: Response) => {
          return <typeof typeModel>res.json();
        })
      );
  }

  post(url: string, data: any, options?: any) {
    options = options || {};
    url = this.baseUrl + url;
    const token = localStorage.getItem('token');

    if (token) {
      this.headers.append('Authorization', 'Bearer ' + token);
    }

    if ( !options.hasOwnProperty('headers') ) {
      options.headers = this.headers;
    }

    return this.moskUser;
    /* return this.http
      .post(url, data, options)
      .pipe(
        map((res: Response) => {
          console.log(res.json());
          return res.json();
        })
      )
      .pipe(
        catchError(this.handleHttpError)
      ); */
  }

  private handleHttpError(error: any) {
    const errorBody = JSON.parse(error._body);

    for (const k in errorBody.errors) {
      if (errorBody.errors[k]) {
        const notice = new Notify(k + ': ' + errorBody.errors[k], 'danger');
        console.log(this.notificationService);
        // this.notificationService.pushMessage(notice);
      }
    }

    return ErrorObservable.create(error);
  }

}

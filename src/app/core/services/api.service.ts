import { PreloaderService } from '../../shared/preloader.service';
import { Injectable } from '@angular/core';

import { Response, Headers } from '@angular/http';
import { finalize, map, catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Notify } from '../../shared/models/notify';
import { NotificationService } from './notification.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable()
export class ApiService {
  private baseUrl = `http://conduit.productionready.io/api/`;

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
  });

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) { }

  get(url: string, options?: any) {
    options = options || {};
    url = this.baseUrl + url;

    if ( !options.hasOwnProperty('headers') ) {
      options.headers = this.headers;
    }

    return this.http
      .get(url, options)
      .pipe(
        catchError(this.handleHttpError)
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

    return this.http
      .post(url, data, options)
      .pipe(
        catchError(this.handleHttpError)
      );
  }

  private handleHttpError(error: HttpErrorResponse) {
    // for (const k in error.error.errors) {
    //   if (error.error.errors[k]) {
    //     const notice = new Notify(k + ': ' + error.error.errors[k], 'danger');
    //     this.notificationService.pushMessage(notice);
    //   }
    // }

    return ErrorObservable.create(error);
  }

}

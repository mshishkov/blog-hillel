import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ErrorsService {
  private errorArray = [];
  private errors$: BehaviorSubject<any> = new BehaviorSubject(this.errorArray);

  constructor() { }

  get errors(): Observable<any[]> {
    return this.errors$.asObservable();
  }

  pushError(error: any) {
    this.errorArray.push(error);
    this.errors$.next([...this.errorArray]);
  }

}

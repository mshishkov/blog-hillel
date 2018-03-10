import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PreloaderService {
  public hidden$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() { }

  show() {
    this.hidden$.next(false);
  }

  hide() {
    this.hidden$.next(true);
  }

  get state() {
    return this.hidden$.asObservable();
  }
}

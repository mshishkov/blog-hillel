import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PreloaderService {
  public hidden: boolean;

  constructor() {
    this.hidden = true;
  }

  getState() {
    return this.hidden;
  }

  show() {
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

}

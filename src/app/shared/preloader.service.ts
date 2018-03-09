import { Injectable } from '@angular/core';

@Injectable()
export class PreloaderService {
  private hidden: boolean;

  constructor() {
    this.hidden = true;
  }

  show() {
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

}

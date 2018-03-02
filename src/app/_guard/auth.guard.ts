import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor() { }

    canActivate() {
      if (localStorage.getItem('currentUser')) {
          return true;
      }

      // to be redirect to login ?
      return false;
    }
}

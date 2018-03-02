import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ROLES } from '../shared/models/roles';
import { User } from '../shared/models/user';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor() { }

    canActivate() {
      if (localStorage.getItem('currentUser')) {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        return user.role === ROLES.admin;
      }

      // to be redirect to login ?
      return false;
    }
}

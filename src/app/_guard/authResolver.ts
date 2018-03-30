import { of } from 'rxjs/observable/of';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { User } from '../shared/models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthResolver implements Resolve<User> {
  constructor ( private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const token = localStorage.getItem('token');
    return token ? this.userService.currentUser() : of({});
  }

}

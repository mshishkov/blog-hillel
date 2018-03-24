import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { User } from '../shared/models/user';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthResolver implements Resolve<User> {
  constructor ( private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.userService.currentUser();
  }

}

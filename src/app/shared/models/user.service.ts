import { ROLES } from './roles';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private user: User) { }

  isAdmin() {
    return this.user.role === ROLES.admin;
  }

  isAuthor() {
    return this.user.role === ROLES.author;
  }

  isGuest() {
    return this.user.role === ROLES.guest;
  }

  isModerator() {
    return this.user.role === ROLES.moderator;
  }

}

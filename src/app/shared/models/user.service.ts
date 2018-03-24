import { ROLES } from './roles';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private user: User) { }

}

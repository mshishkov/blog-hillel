import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from '../_guard/auth.service';

@Injectable()
export class UserService {

  constructor(
    private api: ApiService,
    private authService: AuthService
  ) { }

  login(data) {
    return this.api.post('users/login', data);
  }

  create(data) {
    return this.api.post('users', data);
  }

  store(user): void {
    return this.authService.store(user);
  }
}

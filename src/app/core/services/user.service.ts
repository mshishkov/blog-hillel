import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from '../../_guard/auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../../shared/models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private user: BehaviorSubject<User> = new BehaviorSubject({} as User);

  constructor(
    private api: ApiService,
    private authService: AuthService
  ) { }

  login(data) {
    data = { user: data };
    return this.api.post('users/login', data);
  }

  create(data) {
    data = {user: data};
    return this.api.post('users', data);
  }

  store(user): void {
    return this.authService.store(user);
  }

  public get currentUser(): Observable<User> {
    return this.user.asObservable();
  }
}

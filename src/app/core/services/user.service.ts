import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from '../../_guard/auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../../shared/models/user';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators/map';

@Injectable()
export class UserService {
  private user$: BehaviorSubject<User> = new BehaviorSubject({} as User);
  public loggedUser$: Observable<User> = this.user$.asObservable();

  constructor(
    private api: ApiService,
    private authService: AuthService,
    private router: Router
  ) { }

  login(data) {
    data = { user: data };
    return this.api
      .post('users/login', data)
      .subscribe(response => {
        console.log(response);
        this.user$ = response.user;
        this.store(this.user$);
        this.router.navigateByUrl('/news');
      });
  }

  create(data) {
    data = {user: data};
    return this.api.post('users', data);
  }

  store(user): void {
    return this.authService.store(user);
  }

  public currentUser(): Observable<User> {
    return this.api.get('user');
  }

}

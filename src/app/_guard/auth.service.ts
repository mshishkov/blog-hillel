import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public token: string;

  constructor() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string) {
    const token = 'test-jwt-token';
    // to be HTTP
    if (token) {
        this.token = token;
        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
        return true;
    } else {
        return false;
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.token = null;
  }

  store(user): void {
    return localStorage.setItem('currentUser', JSON.stringify({ username: user.username, token: user.token }));
  }

}

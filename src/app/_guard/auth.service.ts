import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public token: string;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  login(username: string, password: string) {
    const token = 'test-jwt-token';
    // to be HTTP
    if (token) {
        this.token = token;
        localStorage.setItem('token', token );
        return true;
    } else {
        return false;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.token = null;
  }

  store(user) {
    localStorage.setItem('token', user.token );
  }

}

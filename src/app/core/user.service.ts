import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UserService {

  constructor(private api: ApiService) { }

  login(data) {
    this.api.post('users', data);
  }
}
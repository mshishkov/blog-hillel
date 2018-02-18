import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'aaa-header-auth',
  templateUrl: './header-auth.component.html',
  styles: []
})
export class HeaderAuthComponent implements OnInit {
  public currentUser: User;

  constructor() { }

  ngOnInit() {
    this.currentUser = new User({
      login: 'max',
      firstName: 'Max',
      lastName: 'Shishkov',
      email: 'kupdiesel@gmail.com'
    });

  }

  logout() { }

  login() { }
}

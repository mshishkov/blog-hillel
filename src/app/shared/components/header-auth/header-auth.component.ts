import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ROLES } from '../../models/roles';

@Component({
  selector: 'aaa-header-auth',
  templateUrl: './header-auth.component.html',
  styles: []
})
export class HeaderAuthComponent implements OnInit {
  public currentUser: User;

  constructor() {  }

  ngOnInit() {
  }

}

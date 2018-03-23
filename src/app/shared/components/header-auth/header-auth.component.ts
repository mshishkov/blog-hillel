import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ROLES } from '../../models/roles';
import { UserService } from '../../../core/services/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'aaa-header-auth',
  templateUrl: './header-auth.component.html',
  styles: []
})
export class HeaderAuthComponent implements OnInit {

  constructor(private userService: UserService) {  }

  ngOnInit() {
  }

  // get user() {
    // return this.userService.currentUser().subscribe(data => user = data);
  // }
}

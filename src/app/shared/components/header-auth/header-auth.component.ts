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
  public isUserReady: boolean;
  public currentUser: User;

  constructor(private userService: UserService) {  }

  ngOnInit() {
    this.getUser();

    /**
     * usernameHelp
     * emailHelp
     * imageHelp
     * usernameBio
     */


  }

  getUser() {
    return this.userService
      .loggedUser$
      .subscribe(data => {
        this.currentUser = data;
        this.isUserReady = !!(Object.keys(data)).length;
      });
  }

  logoutUser($event) {
    $event.preventDefault();
    this.userService.destroyUser();
  }
}

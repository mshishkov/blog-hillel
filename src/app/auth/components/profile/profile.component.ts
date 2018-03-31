import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../core/services/user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'aaa-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: User;
  public profileForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      image: ['', Validators.required],
      bio: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.loggedUser$
    .subscribe(
      user => {
        this.user = user;
        console.log('qwqw', user);
        this.profileForm.patchValue(user);
      }
    );
  }

  onSubmit() {
    this.userService
      .update(this.profileForm.value);
  }

}

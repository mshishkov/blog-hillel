import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'aaa-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  public regForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.regForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.maxLength(30)])],
      email: ['', Validators.required],
      password: ['', Validators.required],
      // passwordRepeat: ['', Validators.composeAsync([this.formBuilder.group.arguments['password']])],
    });
  }

  ngOnInit() {
  }


}

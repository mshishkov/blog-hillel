import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../core/services/user.service';


@Component({
  selector: 'aaa-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  ngOnInit() {

  }

  onSubmit() {
    this.userService.login(this.loginForm.value);
  }

}

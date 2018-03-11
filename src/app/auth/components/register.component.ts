import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordRepeatValidator } from '../../shared/directives/password-repeat-validator';


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
      confirmPassword: ['', Validators.compose([
        Validators.required,
        PasswordRepeatValidator()
      ])],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService
      .create(this.regForm.value)
      .subscribe(data => console.log(data));
  }

}

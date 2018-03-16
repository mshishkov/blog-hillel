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
      username: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(6)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(6)])],
      confirmPassword: ['', Validators.compose([ Validators.required, PasswordRepeatValidator() ])],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.regForm.dirty, this.regForm.valid);

    if (this.regForm.dirty && this.regForm.valid) {
      this.userService
        .create(this.regForm.value)
        .subscribe(data => console.log(data));
    }
  }

}

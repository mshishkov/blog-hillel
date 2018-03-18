import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordRepeatValidator } from '../../shared/directives/password-repeat-validator';
import { Router } from '@angular/router';
import { AuthService } from '../../_guard/auth.service';

@Component({
  selector: 'aaa-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  public regForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
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
    if (this.regForm.dirty && this.regForm.valid) {
      this.userService
        .create(this.regForm.value)
        .subscribe(data => {
          this.userService.store(data);
          this.router.navigateByUrl('/news');
        });
    }
  }

}

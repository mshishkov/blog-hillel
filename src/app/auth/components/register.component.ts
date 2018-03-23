import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordRepeatValidator } from '../../shared/directives/password-repeat-validator';
import { Router } from '@angular/router';
import { AuthService } from '../../_guard/auth.service';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../../core/services/notification.service';
import { Notify } from '../../shared/models/notify';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

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
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.regForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(6)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(8)])],
      confirmPassword: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(8),
          PasswordRepeatValidator()
      ])],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.regForm.dirty && this.regForm.valid) {
      this.userService.create(this.regForm.value)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            for (const k in error.error.errors) {
              if (error.error.errors[k]) {
                const notice = new Notify(k + ': ' + error.error.errors[k], 'danger');
                this.notificationService.pushMessage(notice);
              }
            }
            return new ErrorObservable(error);
          })
        )
        .pipe(
          map(data => data = data.user)
        )
        .subscribe(data => {
          this.router.navigateByUrl('/login');
        });
    }
  }

}

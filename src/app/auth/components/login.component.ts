import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'aaa-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  ngOnInit() {

  }

  onSubmit() {
    this.userService
    .login( this.loginForm.value )
    .subscribe( data => {
      this.userService.store(data);
      this.router.navigateByUrl('/news');
    } );
  }

}

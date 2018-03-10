import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../core/user.service';


@Component({
  selector: 'aaa-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private userServie: UserService) {
    this.loginForm = new FormGroup({
      'login': new FormControl('', Validators.compose([Validators.maxLength(30)])),
      'password': new FormControl('', Validators.required)
    });
   }

  ngOnInit() {

  }

  onSubmit() {
    this.userServie.login( this.loginForm.value );
  }

}

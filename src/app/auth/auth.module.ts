import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth-routes';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegisterComponent, ProfileComponent],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }

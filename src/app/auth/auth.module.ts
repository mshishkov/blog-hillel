import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth-routes';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild( authRoutes ),
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }

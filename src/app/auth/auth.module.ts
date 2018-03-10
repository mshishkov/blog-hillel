import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth-routes';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild( authRoutes )
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule { }

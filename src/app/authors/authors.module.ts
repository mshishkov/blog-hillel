import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import { AuthorsRoutes } from './authors-routing';
import { AuthorsService } from './authors.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( AuthorsRoutes )
  ],
  declarations: [AuthorsComponent],
  exports: [AuthorsComponent]
})
export class AuthorsModule { }

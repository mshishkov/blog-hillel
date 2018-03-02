import { AuthorsComponent } from './authors.component';
import { Routes } from '@angular/router';
import { AuthorsResolveService } from './author-resolve.service';
import { AuthorsEditorComponent } from '../authors-editor/authors-editor.component';
import { AuthGuard } from '../_guard/auth.guard';

export const AuthorsRoutes: Routes = [
  { path: 'authors/:login',
    component: AuthorsComponent,
    resolve: AuthorsResolveService
  },
  {
    path: 'authors/:login/edit',
    component: AuthorsEditorComponent,
    canActivate: [AuthGuard]
  }
];

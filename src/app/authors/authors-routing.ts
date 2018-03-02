import { AuthorsComponent } from './authors.component';
import { Routes } from '@angular/router';
import { AuthorsResolveService } from './author-resolve.service';

export const AuthorsRoutes: Routes = [
  // { path: 'authors', component: A},
  { path: 'authors/:login', component: AuthorsComponent, resolve: AuthorsResolveService}
];

import { Routes } from '@angular/router';
import { AuthResolver } from './_guard/authResolver';
import { ContainerComponent } from './container.component';
import { NewsRoutes } from './news/news-routes';

export const AppRoutes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    resolve: { user: AuthResolver },
    children: [ ...NewsRoutes]
  },
];

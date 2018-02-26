import { NewsResolverService } from './news-resolver.service';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-helpers/news-list.component';
import { Routes } from '@angular/router';

export const NewsRoutes: Routes = [
  {path: 'news', component: NewsListComponent},
  {path: 'news/:slug', component: NewsComponent, resolve: NewsResolverService },
];

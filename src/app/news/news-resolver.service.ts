import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { News } from '../shared/models/news';
import { FetchNewsService } from './fetch-news.service';

export class NewsResolverService implements Resolve<News> {

  constructor( private newsService: FetchNewsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.newsService.getNewsBySlug('science-environment-42969020');
  }

}

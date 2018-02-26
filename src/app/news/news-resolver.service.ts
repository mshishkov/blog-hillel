import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { News } from '../shared/models/news';
import { FetchNewsService } from './fetch-news.service';

export class NewsResolverService implements Resolve<News> {

  constructor( private newsService: FetchNewsService) {
    console.log('asdf');
  }

  resolve(route: ActivatedRouteSnapshot) {
    console.log(route);
    return null;
    // return this.newsService.getNewsBySlug();
  }

}

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { News } from '../shared/models/news';
import { FetchNewsService } from './fetch-news.service';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsResolverService implements Resolve<News> {

  constructor( private newsService: FetchNewsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.newsService.getNewsBySlug( route.params['slug'] );
  }

}

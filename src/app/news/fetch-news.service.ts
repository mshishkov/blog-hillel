import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { News } from '../shared/models/news';
import * as _ from 'lodash';
// Mock of NEWS
import { NEWS } from './mock-news';

@Injectable()
export class FetchNewsService {

  constructor() {}

  getNews(): Observable<News[]> {
    return of(NEWS.filter(news => news.active));
  }

  getNewsBySlug(slug: string): News {
    return _.find(NEWS, news => news.slug === news);
  }

  remove(news: News) {
    const confirmed = confirm('Are you sure?');
    if (!confirmed) {
      return;
    }
    news.active = false;
  }

}

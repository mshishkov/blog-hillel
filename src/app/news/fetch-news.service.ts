import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { News } from '../shared/models/news';

// Mock of NEWS
import { NEWS } from './mock-news';

@Injectable()
export class FetchNewsService {

  constructor() {}

  getNews() {
    return of(NEWS.filter(news => news.active));
  }

  remove(news: News) {
    const index = NEWS.indexOf(news);
    const confirmed = confirm('Are you sure?');
    if (!confirmed) {
      return;
    }
    news.active = false;
  }

}

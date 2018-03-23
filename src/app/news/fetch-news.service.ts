import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { News } from '../shared/models/news';
import * as _ from 'lodash';
import { Response } from '@angular/http';

import { ApiService } from '../core/services/api.service';
import { ApiFilterService } from '../core/services/api.filter.service';

@Injectable()
export class FetchNewsService {

  constructor(
    private api: ApiService,
    private apiFiltersService: ApiFilterService
  ) { }

  getNews(): Observable<{articles: News[]}> {
    return this.api.get('articles?' + this.apiFiltersService.getFilters());
  }

  getNewsBySlug(slug: string): Observable<News> {
    return this.api
    .get(`articles/${slug}`)
    .pipe(
      map((data: { article: News}) => data.article)
    );
  }

  remove(news: News) {
    const confirmed = confirm('Are you sure?');
    if (!confirmed) {
      return;
    }
  }

}

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { News } from '../shared/models/news';
import * as _ from 'lodash';
import { Response } from '@angular/http';

// Mock of NEWS
import { ApiService } from '../core/api.service';
import { ApiFilterService } from '../core/api.filter.service';

@Injectable()
export class FetchNewsService {

  constructor(
    private api: ApiService,
    private apiFiltersService: ApiFilterService
  ) { }

  getNews(filters = ''): Observable<{articles: News[]}> {
    return this.api.get('articles?' + this.apiFiltersService.getFilters(), News);
  }

  getNewsBySlug(slug: string): Observable<News> {
    return this.api.get(`articles/${slug}`, News)
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

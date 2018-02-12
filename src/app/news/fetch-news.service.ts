import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { News } from '../shared/models/news';

// Mock of NEWS
import { NEWS } from './mock-news';

@Injectable()
export class FetchNewsService {

  constructor() {}

  getNews(): Observable<News[]> {
    return of(NEWS);
  }

}

import { Injectable } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { map } from 'rxjs/operators';
import { ApiService } from '../core/services/api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagsFetchService {

  constructor( private api: ApiService) { }

  getTags(): Observable<{tags: Tag[]}> {
    return this.api.get('tags', Tag);
  }

}

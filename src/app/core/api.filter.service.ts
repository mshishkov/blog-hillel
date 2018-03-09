import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiFilterService {
  private defaults = {
    limit: 10
  };

  public limit: number;
  public offset: number;
  public search: string;
  public favorited: boolean;
  public author: string;
  public tag: string;

  constructor() {
    if (typeof this.limit === typeof undefined) {
      this.limit = this.defaults.limit;
    }
  }

  setLimit(limit: number) {
    this.limit = limit;
    this.setPage(1);
    return this;
  }

  setOffset(offset: number) {
    this.offset = offset;
    return this;
  }

  setSearch(searchQuery: string) {
    this.search = encodeURI(searchQuery);
    this.setPage(1);
    return this;
  }

  setFavourited(isFavorited: boolean) {
    this.favorited = isFavorited;
    this.setPage(1);
    return this;
  }

  setAuthor(author: string) {
    this.author = encodeURI(author);
    this.setPage(1);
    return this;
  }

  setTag(tag: string) {
    this.tag = encodeURI(tag);
    this.offset = 0;
    this.search = '';
    this.favorited = null;
    this.author = null;
    this.setPage(1);
    return this;
  }

  setPage(page: number) {
    this.offset = this.limit * (page - 1);
    console.log(this);

    return this;
  }

  getFilters() {
    const filters = [];

    if (typeof this.tag !== typeof undefined && this.tag.length > 0) {
      filters.push('tag=' + this.tag);
    } else {
      if (this.limit > 0) {
        filters.push('limit=' + this.limit);
      }

      if (this.offset > 0) {
        filters.push('offset=' + this.offset);
      }

      if (typeof this.favorited !== typeof undefined) {
        filters.push('favorited=' + this.favorited);
      }

      if (typeof this.author !== typeof undefined && this.author.length > 0) {
        filters.push('author=' + encodeURI(this.author));
      }

      if (typeof this.search !== typeof undefined && this.search.length > 0) {
        filters.push('q=' + encodeURI(this.search));
      }

    }

    return filters.join('&');
  }

}

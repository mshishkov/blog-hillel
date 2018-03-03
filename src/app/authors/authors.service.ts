import { Author } from './../shared/models/author';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class AuthorsService {

  constructor() { }

  public getAuthorByLogin(login: string): Author {
    return _.find([], author => author.login === login);
  }

}

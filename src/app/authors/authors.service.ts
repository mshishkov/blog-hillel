import { Author } from './../shared/models/author';
import { AUTHORS } from './authors-mock';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class AuthorsService {

  constructor() { }

  public getAuthorByLogin(login: string): Author {
    return _.find(AUTHORS, author => author.login === login);
  }

}

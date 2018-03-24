import { ROLES } from './roles';
import { User } from './user';

export class Author {
  public department?: string;

  constructor(params) {
    params.role = ROLES.author;

  }
}


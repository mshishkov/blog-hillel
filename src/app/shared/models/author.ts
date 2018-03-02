import { ROLES } from './roles';
import { User } from './user';

export class Author extends User {
  public department?: string;

  constructor(params) {
    params.role = ROLES.author;
    super(params);
    for (const [key, value] of Object.entries(params)) {
        this[key] = value;
    }
  }
}


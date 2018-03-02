import { Image } from './image';
import { ROLES } from './roles';

export class User {
    login: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    occupation?: string;
    email?: string;
    photo?: Image;
    createdAt?: string;
    lastLogin?: string;
    active?: boolean;
    role?: number;

    constructor(params = {}) {
      for (const [key, value] of Object.entries(params)) {
          this[key] = value;
      }
      if (!params.hasOwnProperty('active')) {
        this.active = true;
      }
      if (!params.hasOwnProperty('createdAt')) {
        this.createdAt = new Date().toTimeString();
      }
      if (!params.hasOwnProperty('role')) {
        this.role = ROLES.guest;
      }
    }
}


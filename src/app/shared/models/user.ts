import { Image } from './image';

export class User {
    login: string;
    password: string;
    firstName: string;
    lastName: string;
    occupation: string;
    email: string;
    photo: Image;
    createdAt: string;
    lastLogin: string;
    active: boolean;

    constructor(params = {}) {
        for (const [key, value] of Object.entries(params)) {
            this[key] = value;
        }
    }
}


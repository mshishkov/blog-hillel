import { Author } from './author';
import { SlugGenerator } from './../helpers/slugGenerator';
import { MODERATOR_STATES } from './moderatorStates';

export class News {
  title?: string;
  slug?: string;
  views?: number;
  previewImage?: string;
  description?: string;
  html?: string;
  author?: Author;
  active?: boolean;
  editing?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  tags?: string[];
  state?: number;

  constructor(params = {}) {
    for (const [key, value] of Object.entries(params)) {
      this[key] = value;
    }
    if (!params.hasOwnProperty('state')) {
      this.state = MODERATOR_STATES.draft;
    }
    if (!params.hasOwnProperty('slug')) {
      this.slug = new SlugGenerator().generate(this.title);
    }
  }
}


export class News {
  title?: string;
  slug?: string;
  views?: number;
  previewImage?: string;
  description?: string;
  html?: string;
  author?: string;
  active?: boolean;
  editing?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  tags?: string[];

  constructor(params = {}) {
    for (const [key, value] of Object.entries(params)) {
      this[key] = value;
    }
  }
}

import { Base } from './base';

export class News implements Base {
  title: string;
  url: string;
  date: string;
  views: number;
  previewImage: string;
  description: string;
  html: string;
  author: string;
  createdAt: string = new Date().toTimeString();
  updatedAt: string;
  deletedAt: string;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}

import { Base } from './base';

export class News implements Base {
  title: string;
  url: string;
  views: number;
  previewImage: string;
  description: string;
  html: string;
  author: string;
  createdAt: string = new Date().toTimeString();
  updatedAt: string;
  deletedAt: string;

  constructor() { }
}

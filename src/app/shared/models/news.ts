import { Ieditable } from './ieditable';
import { Base } from './base';

export class News implements Base, Ieditable {
  title: string;
  url: string;
  views: number;
  previewImage: string;
  description: string;
  html: string;
  author: string;
  active: boolean;
  editing: boolean;
  createdAt: string = new Date().toTimeString();
  updatedAt: string;
  deletedAt: string;

  constructor() { }
}

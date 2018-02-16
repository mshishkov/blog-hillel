import { IEditable } from './ieditable';
import { IBase } from './ibase';

export class News implements IBase, IEditable {
   constructor(
     public title: string = '',
     public url: string = '',
     public views: number = 0,
     public previewImage: string = '',
     public description: string = '',
     public html: string = '',
     public author: string = '',
     public active: boolean = false,
     public editing: boolean = false,
     public createdAt: string = '',
     public updatedAt: string = '',
     public deletedAt: string = '',
     public tags: string[] = []
   ) { }
}

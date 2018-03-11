import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsListComponent } from './tags-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TagsListComponent],
  exports: [TagsListComponent]
})
export class TagsModule { }

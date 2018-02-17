import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsInlineFormComponent } from './news-editor-helpers/news-inline-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NewsInlineFormComponent],
  exports: [NewsInlineFormComponent]
})
export class NewsEditorModule { }

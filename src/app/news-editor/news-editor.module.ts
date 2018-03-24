import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsInlineFormComponent } from './news-editor-helpers/news-inline-form.component';
import { FormsModule } from '@angular/forms';
import { NewsEditorComponent } from './news-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NewsInlineFormComponent, NewsEditorComponent],
  exports: [NewsInlineFormComponent]
})
export class NewsEditorModule { }

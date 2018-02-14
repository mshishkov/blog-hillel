import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-helpers/news-list.component';
import { NewsPreviewComponent } from './news-helpers/news-preview.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [NewsComponent, NewsListComponent, NewsPreviewComponent],
  exports: [NewsComponent, NewsListComponent, NewsPreviewComponent]
})
export class NewsModule { }

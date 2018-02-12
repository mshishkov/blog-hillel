import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-helpers/news-list.component';
import { NewsPreviewComponent } from './news-helpers/news-preview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewsComponent, NewsListComponent, NewsPreviewComponent],
  exports: [NewsComponent, NewsListComponent, NewsPreviewComponent]
})
export class NewsModule { }

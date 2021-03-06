import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-helpers/news-list.component';
import { NewsPreviewComponent } from './news-helpers/news-preview.component';
import { SharedModule } from '../shared/shared.module';
import { NewsListPinesComponent } from './news-helpers/news-list-pines.component';
import { NewsEditorModule } from '../news-editor/news-editor.module';
import { HttpModule } from '@angular/http';
import { NewsResolverService } from './news-resolver.service';
import { FetchNewsService } from './fetch-news.service';
import { NewsFilterComponent } from './news-helpers/news-filter.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NewsEditorModule,
    HttpModule
  ],
  providers: [ NewsResolverService, FetchNewsService ],
  declarations: [NewsComponent, NewsListComponent, NewsPreviewComponent, NewsListPinesComponent, NewsFilterComponent],
  exports: [NewsComponent, NewsListComponent, NewsPreviewComponent, NewsListPinesComponent, NewsFilterComponent]
})
export class NewsModule { }

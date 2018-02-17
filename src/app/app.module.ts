import { FetchNewsService } from './news/fetch-news.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsModule } from './news/news.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NewsEditorModule } from './news-editor/news-editor.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NewsModule,
    CoreModule,
    SharedModule,
    NewsEditorModule,
    FormsModule
  ],
  providers: [
    FetchNewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

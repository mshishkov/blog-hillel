import { PreloaderService } from './shared/preloader.service';
import { ApiFilterService } from './core/api.filter.service';
import { FetchNewsService } from './news/fetch-news.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsModule } from './news/news.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NewsEditorModule } from './news-editor/news-editor.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { AuthorsModule } from './authors/authors.module';
import { AuthorsComponent } from './authors/authors.component';
import { AuthGuard } from './_guard/auth.guard';
import { AuthorsEditorModule } from './authors-editor/authors-editor.module';
import { ApiService } from './core/api.service';
import { TagsModule } from './tags/tags.module';
import { TagsFetchService } from './tags/tags-fetch.service';
import { AuthModule } from './auth/auth.module';
import { UserService } from './core/user.service';
import { NotificationService } from './core/notification.service';

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
    FormsModule,
    AuthorsModule,
    AuthorsEditorModule,
    RouterModule.forRoot([]),
    TagsModule,
    AuthModule
  ],
  providers: [
    FetchNewsService,
    AuthGuard,
    ApiService,
    ApiFilterService,
    PreloaderService,
    TagsFetchService,
    UserService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

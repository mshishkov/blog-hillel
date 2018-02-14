import { News } from './../shared/models/news';
import { Component, OnInit } from '@angular/core';
import { FetchNewsService } from './fetch-news.service';

@Component({
  selector: 'aaa-news',
  templateUrl: './news.component.html',
  styles: []
})
export class NewsComponent implements OnInit {
  public newsList: News[] = [];
  public deletedList: News[] = [];

  constructor(private fetchNewsService: FetchNewsService) { }

  ngOnInit() {
    this.getNews();
    this.getDeleted();
  }

  getNews(): void {
    this.fetchNewsService.getNews()
      .subscribe(news => this.newsList = news);
  }

  getDeleted(): void {
    this.fetchNewsService.getDeletedNews()
      .subscribe(news => this.deletedList = news);
  }

  restore(): void {
    this.fetchNewsService.restore();
  }

}

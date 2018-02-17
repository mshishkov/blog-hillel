import { News } from './../shared/models/news';
import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { FetchNewsService } from './fetch-news.service';

@Component({
  selector: 'aaa-news',
  templateUrl: './news.component.html',
  styles: []
})
export class NewsComponent implements OnInit {
  public newsList: News[] = [];
  public viewMode: string;

  constructor(private fetchNewsService: FetchNewsService) { }

  ngOnInit() {
    this.viewMode = 'rows';
    this.getNews();
  }

  getNews(): void {
    this.fetchNewsService.getNews()
      .subscribe(news => this.newsList = news);
  }

  switchMode(mode: string) {
    this.viewMode = mode;
  }
}

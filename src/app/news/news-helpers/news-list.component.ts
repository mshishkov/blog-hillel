import { News } from './../../shared/models/news';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { NgSwitch, Location } from '@angular/common';
import { FetchNewsService } from '../fetch-news.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'aaa-news-list',
  templateUrl: './news-list.component.html',
  styles: []
})
export class NewsListComponent implements OnInit {
  public newsList: News[] = [];
  public viewMode: string;

  constructor(
    private fetchNewsService: FetchNewsService,
    private route: Router,
    private avtivatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.viewMode = 'rows';
    this.getNews();
  }

  getNews(): void {
    this.fetchNewsService
    .getNews().subscribe(news => this.newsList = news);
  }

  switchMode(event: Event, mode: string) {
    event.preventDefault();
    this.viewMode = mode;
  }

}

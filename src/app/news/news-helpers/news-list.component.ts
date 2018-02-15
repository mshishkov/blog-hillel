import { News } from './../../shared/models/news';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'aaa-news-list',
  templateUrl: './news-list.component.html',
  styles: []
})
export class NewsListComponent implements OnInit {
  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

  save(event: Event, news: News) {
    event.preventDefault();
    news.editing = false;
  }

}

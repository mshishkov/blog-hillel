import { News } from './../../shared/models/news';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'aaa-news-list-pines',
  templateUrl: './news-list-pines.component.html',
  styles: []
})
export class NewsListPinesComponent implements OnInit {
  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }
}

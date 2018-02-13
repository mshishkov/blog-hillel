import { News } from './../../shared/models/news';
import { Component, OnInit, Input } from '@angular/core';

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
}

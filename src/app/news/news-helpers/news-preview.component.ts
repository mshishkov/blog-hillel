import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../shared/models/news';

@Component({
  selector: 'aaa-news-preview',
  templateUrl: './news-preview.component.html',
  styles: []
})
export class NewsPreviewComponent implements OnInit {
  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

  save(event: Event, news: News) {
    event.preventDefault();
    news.editing = false;
  }

}

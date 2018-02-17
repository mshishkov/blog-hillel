import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../shared/models/news';

@Component({
  selector: 'aaa-news-inline-form',
  templateUrl: './news-inline-form.component.html',
  styles: []
})
export class NewsInlineFormComponent implements OnInit {
  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

  save(event: Event, news: News) {
    event.preventDefault();
    news.editing = false;
  }
}

import { NewsListComponent } from './news-helpers/news-list.component';
import { News } from './../shared/models/news';
import { Component, OnInit } from '@angular/core';
import { FetchNewsService } from './fetch-news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'aaa-news',
  templateUrl: './news.component.html',
  styles: [],
  providers: [FetchNewsService]
})
export class NewsComponent implements OnInit {
  public news: News;

  constructor(
    private newsService: FetchNewsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data
      .subscribe((data: {news: News}) => {
         this.news = data.news;
      });
  }

  backToList(event) {
    event.preventDefault();
    this.router.navigate(['/news'], { relativeTo: this.route });
  }

}

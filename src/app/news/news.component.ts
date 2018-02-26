import { News } from './../shared/models/news';
import { Component, OnInit } from '@angular/core';
import { FetchNewsService } from './fetch-news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'aaa-news',
  templateUrl: './news.component.html',
  styles: []
})
export class NewsComponent implements OnInit {
  public news: News;

  constructor(
    private newsService: FetchNewsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    // console.log(this.newsService.getNewsBySlug(
    //   this.route.snapshot.params['slug'])
    // );
    this.news = this.route.snapshot.data['news'];
  }
}

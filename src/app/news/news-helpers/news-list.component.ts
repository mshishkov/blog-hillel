import { ApiFilterService } from './../../core/api.filter.service';
import { News } from './../../shared/models/news';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { FetchNewsService } from '../fetch-news.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'aaa-news-list',
  templateUrl: './news-list.component.html',
  styles: []
})
export class NewsListComponent implements OnInit {
  public newsList: News[] = [];
  public viewMode: string;
  public perPage = 10;
  public sort = 1;
  public pagesTotal = 100;
  public currentPage: Number = 1;
  public paginationModel: News = new News;

  constructor(
    private fetchNewsService: FetchNewsService,
    private route: Router,
    private avtivatedRoute: ActivatedRoute,
    private apiFiltersService: ApiFilterService
  ) { }

  ngOnInit() {
    this.viewMode = 'rows';
    this.getNews();
  }

  getNews(): void {
    this.fetchNewsService
    .getNews()
    .subscribe( data => this.newsList = data.articles);
  }

  switchMode(event: Event, mode: string) {
    event.preventDefault();
    this.viewMode = mode;
  }

  doSort(event) {
    // this.pagesTotal = Math.ceil(this.newsListFull.length / +this.perPage);

    // this.newsListFull.sort((news1, news2) =>
    //   (this.sort === 0 ?
    //       news1.views < news2.views :
    //       new Date(news1.createdAt).getTime() < new Date(news2.createdAt).getTime()
    //   ) ? 1 : 0);

    //   this.afterFiltering();
  }

  sorting(sortVal: Number, event) {
    // this.sort = sortVal;
    // this.currentPage = 1;
    // this.doSort(event);
  }

  paging(event) {
    this.perPage = event.target.value;
    this.currentPage = 1;
    this.apiFiltersService.setLimit(this.perPage).setPage(1);
    this.getNews();
  }

  afterFiltering() {
    // const fromPage = (+this.currentPage - 1) * +this.perPage;
    // this.newsListFiltered = this.newsListFull.slice(fromPage, fromPage + +this.perPage);
  }

  changePage(page: Number) {
    this.apiFiltersService.setPage(+page);
    this.getNews();
    this.currentPage = page;
  }


}

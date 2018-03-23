import { ApiFilterService } from './../../core/services/api.filter.service';
import { News } from './../../shared/models/news';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { FetchNewsService } from '../fetch-news.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { finalize, map } from 'rxjs/operators';
import { PreloaderService } from '../../shared/preloader.service';

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
    private apiFiltersService: ApiFilterService,
    private preloaderService: PreloaderService
  ) { }

  ngOnInit() {
    this.viewMode = 'rows';
    this.getNews();
  }

  getNews(): void {
    this.preloaderService.show();
    this.fetchNewsService
    .getNews()
    .pipe(
      finalize(() => this.preloaderService.hide())
    )
    .subscribe( data => this.newsList = data.articles);
  }

  switchMode(event: Event, mode: string) {
    event.preventDefault();
    this.viewMode = mode;
  }

  doSort(event) {

  }

  sorting(sortVal: Number, event) {

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

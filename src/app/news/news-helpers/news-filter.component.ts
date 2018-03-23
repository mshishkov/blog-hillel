import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output, Input } from '@angular/core';
import { ApiFilterService } from '../../core/services/api.filter.service';

@Component({
  selector: 'aaa-news-filter',
  templateUrl: './news-filter.component.html',
  styles: []
})
export class NewsFilterComponent implements OnInit {
  @Output() sorting = new EventEmitter();
  @Output() paging = new EventEmitter();
  @Input() perPage: number;
  @Input() sort: number;

  public sortingNumbers: Array<number> = [1, 2, 5, 10, 20, 50, 100];

  constructor( ) { }

  ngOnInit() {
  }

  changeSort(sort: number) {
    this.sorting.emit(sort);
  }

  changePerPage(event) {
    this.paging.emit(event);
  }

}

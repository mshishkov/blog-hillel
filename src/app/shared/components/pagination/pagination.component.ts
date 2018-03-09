import { PaginationItem } from './../../models/paginationItem';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aaa-pagination',
  templateUrl: './pagination.component.html',
  styles: []
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() forModel: any;

  // probably would be taken from routing or pagination service
  @Input() pagesTotal: Number = 1;
  @Input() perPage: Number = 1;
  @Input() currentPage: Number = 1;
  @Input() visiblePages: Number = 3;
  @Output() changePage = new EventEmitter();
  @Input() limit: Number = 10;

  // list of all items
  public items: PaginationItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.paginate();
  }

  paginate() {
    this.items = [];
     for (let i = 1; i <= this.pagesTotal; i++) {
      if (i === 1 || i === +this.pagesTotal) {
        this.items.push(new PaginationItem(i.toString(), this.forModel.getUrl(i), +this.currentPage === i));
      } else if (i > 1 && i < +this.pagesTotal) {
        if (i >= +this.currentPage - Math.floor(+this.visiblePages / 2) && i <= +this.currentPage + Math.floor(+this.visiblePages / 2)) {
          this.items.push(new PaginationItem(i.toString(), this.forModel.getUrl(i), +this.currentPage === i));
        } else if (
              (i === 2 &&  +this.currentPage - Math.floor(+this.visiblePages / 2) > 2)
              ||
              (i === +this.pagesTotal - 1 && +this.currentPage + Math.floor(+this.visiblePages / 2) < +this.pagesTotal - 1 )
          ) {
            this.items.push(new PaginationItem('...', '', false));
        }
      }
    }
  }

  toPage(page, event) {
    if (page.url !== '') {
      this.changePage.emit(+page.title);
    }
  }

}

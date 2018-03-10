import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tag } from '../shared/models/tag';
import { TagsFetchService } from './tags-fetch.service';

@Component({
  selector: 'aaa-tags-list',
  templateUrl: './tags-list.component.html',
  styles: []
})
export class TagsListComponent implements OnInit {
  public tagList: Tag[];

  constructor( private tagsService: TagsFetchService ) {  }

  ngOnInit() {
    this.getTags();
  }

  getTags(): void {
    this.tagsService
    .getTags()
    .subscribe( data => this.tagList = data.tags);
  }
}

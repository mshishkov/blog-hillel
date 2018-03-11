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
  public tagList: Tag[] = [];

  constructor(private tagsFetchService: TagsFetchService ) {  }

  ngOnInit() {
    this.getTags();
  }

  getTags(): void {
    this.tagsFetchService
    .getTags()
    .subscribe( data => this.tagList = data.tags );
  }
}

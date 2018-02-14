import { FetchNewsService } from './../../news/fetch-news.service';
import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[aaaRemove]'
})
export class RemoveDirective {
  @Input('model') model;

  constructor(private el: ElementRef, private fetchService: FetchNewsService) { }

  @HostListener('click', ['$event']) onClick(event) {
    event.preventDefault();
    this.fetchService.remove(this.model);
  }

}

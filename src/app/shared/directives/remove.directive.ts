import { NewsComponent } from './../../news/news.component';
import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { NEWS } from '../../news/mock-news';

@Directive({
  selector: '[aaaRemove]'
})
export class RemoveDirective {
  @Input('model') model;

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event']) onClick(event) {
    event.preventDefault();
    console.log('test remove');
  }

}

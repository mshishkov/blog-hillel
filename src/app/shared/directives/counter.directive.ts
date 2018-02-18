import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { News } from '../models/news';

@Directive({
  selector: '[aaaCounter]'
})
export class CounterDirective {
  @Input('model') model;
  @Input('property') property: string;

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event']) onClick(event) {
    event.preventDefault();

    if (this.model === null || typeof this.model !== typeof News || this.property === '') {
      return;
    }

    if (this.model.active) {
      this.model[this.property]++;
    }
  }

}

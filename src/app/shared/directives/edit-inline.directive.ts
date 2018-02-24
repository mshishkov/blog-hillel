import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { News } from '../models/news';

@Directive({
  selector: '[aaaEditInline]'
})
export class EditInlineDirective {
  @Input('model') model: News;

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event']) onclick(event) {
    event.preventDefault();
    if (this.model !== null) {
      this.model.editing = true;
    }
  }

}

import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[aaaCounter]'
})
export class CounterDirective {
  @Input('model') model;
  @Input('property') property: string;

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event']) onClick(event) {
    event.preventDefault();
    this.model[this.property]++;
  }

}

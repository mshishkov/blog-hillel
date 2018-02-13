import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[aaaSelectable]'
})
export class SelectableDirective {
  @Input('color') color = 'rgb(240, 255, 119)';
  private selected = false;

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event.target']) onClick() {
    this.selected = !this.selected;
    this.el.nativeElement.style.backgroundColor = this.selected ? this.color : 'transparent';
  }

}

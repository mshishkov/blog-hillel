import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[aaaMarkupHtml]'
})
export class MarkupHtmlDirective {

  constructor(private el: ElementRef) { }

  @HostListener('kewdown', ['$enevt.target']) onKeyDown() {
    let text = this.el.nativeElement.innerHTML;

    console.log(text);

  }

}

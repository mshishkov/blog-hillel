import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aaa-image-holder',
  templateUrl: './image-holder.component.html',
  styles: []
})
export class ImageHolderComponent implements OnInit {
  @Input() link: string;
  @Input() alt: string;

  constructor() { }

  ngOnInit() {
  }

}

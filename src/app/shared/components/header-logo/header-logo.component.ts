import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'aaa-header-logo',
  templateUrl: './header-logo.component.html',
  styles: []
})
export class HeaderLogoComponent implements OnInit {
  public title = 'WorldNews';
  public subTitle = 'something that has happened in the world';

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(event) {
    event.preventDefault();
    if (!document.body.classList.contains('menu-opened')) {
      document.body.classList.add('menu-opened');
    } else {
      document.body.classList.remove('menu-opened');
    }
  }

}

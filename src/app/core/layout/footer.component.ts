import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aaa-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  private beginYear = 2015;
  public years: String = '';

  constructor() { }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.years = currentYear === this.beginYear ? this.beginYear.toString() : `${this.beginYear} - ${currentYear}`;
  }

}

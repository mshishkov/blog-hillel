import { Component, OnInit } from '@angular/core';
import { PreloaderService } from '../../preloader.service';

@Component({
  selector: 'aaa-preloader',
  templateUrl: './preloader.component.html',
  styles: []
})
export class PreloaderComponent implements OnInit {
  public state;

  constructor(private service: PreloaderService) { }

  ngOnInit() {
    this.getState();
  }

  getState(): void {
    this.state = this.service
    .getState();
  }

}

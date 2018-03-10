import { Component, OnInit } from '@angular/core';
import { PreloaderService } from '../../preloader.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'aaa-preloader',
  templateUrl: './preloader.component.html',
  styles: []
})
export class PreloaderComponent implements OnInit {

  constructor(private service: PreloaderService) { }

  ngOnInit() { }

  get preloaderState(): Observable<boolean> {
    return this.service.state;
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user';
import { ROLES } from './shared/models/roles';

@Component({
  selector: 'aaa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appName = 'World News';

  ngOnInit() {
  }

}

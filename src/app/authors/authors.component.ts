import { Router, ActivatedRoute } from '@angular/router';
import { Author } from './../shared/models/author';
import { AuthorsService } from './authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aaa-authors',
  templateUrl: './authors.component.html',
  styles: [],
  providers: [AuthorsService]
})
export class AuthorsComponent implements OnInit {
  public author: Author;

  constructor(
    private authorsService: AuthorsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.author = this.authorsService.getAuthorByLogin(this.route.snapshot.params['login']);
  }

}

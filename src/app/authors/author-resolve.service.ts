import { AuthorsService } from './authors.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Author } from './../shared/models/author';

export class AuthorsResolveService implements Resolve<Author> {

  constructor( private authorsService: AuthorsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log(route.params);
    return this.authorsService.getAuthorByLogin( route.params['login'] );
  }

}

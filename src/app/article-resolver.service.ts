import { Article } from './model/article';
import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<Article> {

  constructor(private ds: DataService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Article> {
    return this.ds.getSingle(route.params['id']);
  }
}

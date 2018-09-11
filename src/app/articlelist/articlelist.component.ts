import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { Article } from '../model/article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.css']
})
export class ArticlelistComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(private ds: DataService) {
    this.articles$ = ds.getAllArticles();
   }

  ngOnInit() {
  }

}

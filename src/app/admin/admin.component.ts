import { ArticleFactory } from './../model/article-factory';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  content = '#test';
  articles$: Observable<Article[]>;
  article: Article;

  constructor(private ds: DataService) {
    this.articles$ = ds.getAllArticles();
    this.article = ArticleFactory.empty();
  }

  ngOnInit() {
  }

}

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

  articles$: Observable<Article[]>;
  article: Article;
  emptyArticle = ArticleFactory.empty();

  constructor(private ds: DataService) {
    this.articles$ = ds.getAllArticles();
    this.article = ArticleFactory.empty();
  }

  ngOnInit() {
  }

  saveArticle() {
    if (this.article._id) {
      this.ds.udpateArticle(this.article).subscribe(res => alert('Artikel aktualisiert'));
    } else {
      this.ds.createArticle(this.article).subscribe(res => alert('Artikel gespeichert'));
    }
  }

}

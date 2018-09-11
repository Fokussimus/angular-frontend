import { Article } from './../model/article';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'a.app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent {

  @Input() article: Article;

  constructor() { }


}

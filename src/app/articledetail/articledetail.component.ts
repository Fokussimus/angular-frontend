import { ArticleFactory } from './../model/article-factory';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.css']
})
export class ArticledetailComponent implements OnInit {

  article = ArticleFactory.empty();

  constructor(private ds: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.article = this.route.snapshot.data['article'];
  }

}

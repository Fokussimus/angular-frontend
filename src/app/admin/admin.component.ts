import { ArticleFactory } from './../model/article-factory';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  articles$: Observable<Article[]>;
  article: Article;
  emptyArticle = ArticleFactory.empty();

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  // tags: String[];

  constructor(public dialog: MatDialog, private ds: DataService) {
    this.articles$ = ds.getAllArticles();
    this.article = ArticleFactory.empty();
  }

  ngOnInit() {
    if (!this.ds.token) {
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  saveArticle() {
    if (this.article._id) {
      this.ds.udpateArticle(this.article).subscribe(res => alert('Artikel aktualisiert'));
    } else {
      this.ds.createArticle(this.article).subscribe(res => alert('Artikel gespeichert'));
    }
  }

  publishArticle() {
    this.article.published = true;
    this.ds.udpateArticle(this.article).subscribe(res => alert('Artikel veröffentlich'));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.article.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: string): void {
    const index = this.article.tags.indexOf(tag);

    if (index >= 0) {
      this.article.tags.splice(index, 1);
    }
  }

}

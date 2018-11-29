import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { retry, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Article } from './model/article';
import { ArticleFactory } from './model/article-factory';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private api = 'http://localhost:3000';
  // private api = 'http://172.20.3.239:3000';
  private headers: Headers = new Headers();
  public token: string;

  constructor(private http: Http) {
    this.token = this.getCookie('fokauth');
    if (this.token) {
      this.headers.append('Authorization', this.token);
    }
    this.headers.append('Content-Type', 'application/json');
  }

  private errorHandler(error: Error | any): Observable<any> {
    alert(error._body);
    return Observable.throw(error);
  }

  getAllArticles(): Observable<Array<Article>> {
    return this.http
    .get(`${this.api}/articles`)
    .pipe(retry(3),
      map(response => response.json()),
      map(rawBooks => rawBooks.map(rawArticle => ArticleFactory.fromObject(rawArticle))),
      catchError(this.errorHandler)
    );
  }

  getPublishedArticles(): Observable<Array<Article>> {
    return this.http
    .get(`${this.api}/articles?published=true`)
    .pipe(retry(3),
      map(response => response.json()),
      map(rawBooks => rawBooks.map(rawArticle => ArticleFactory.fromObject(rawArticle))),
      catchError(this.errorHandler)
    );
  }

  getSingle(id: string): Observable<Article> {
    return this.http
      .get(`${this.api}/articles/${id}`)
      .pipe(
        retry(3),
        map(response => response.json()),
        map(rawBook => ArticleFactory.fromObject(rawBook)),
        catchError(this.errorHandler)
      );
  }

  createArticle(article: Article): Observable<any> {
    return this.http.post(`${this.api}/articles`, JSON.stringify(article), { headers: this.headers })
    .pipe(
        map(response => console.log(response.json())),
        catchError(this.errorHandler)
      );
  }

  udpateArticle(article: Article) {
    return this.http
    .put(`${this.api}/articles/${article._id}`,
    JSON.stringify(article), { headers: this.headers })
    .pipe(
      catchError(this.errorHandler)
    );
  }

  login(usrname: string, password: string): Observable<any> {
    return this.http.post(`${this.api}/signin`, JSON.stringify({usrname, password}), { headers: this.headers })
    .pipe(
        map((response: any) => {
          this.token = JSON.parse(response._body).token;
          this.headers.append('Authorization', this.token);
          this.setCookie('fokauth', this.token);
          console.log(response.statusText);
          return response;
        }),
        catchError(this.errorHandler)
      );
  }

  setCookie(name: string, val: string) {
    const date = new Date();
    const value = val;

    // Set it expire in 2 hours
    date.setTime(date.getTime() + (2 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
  }

  getCookie(name: string) {
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      
      if (parts.length == 2) {
          return parts.pop().split(";").shift();
      }
  }

  deleteCookie(name: string) {
      const date = new Date();

      // Set it expire in -1 days
      date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

      // Set it
      document.cookie = name+"=; expires="+date.toUTCString()+"; path=/";
  }
}

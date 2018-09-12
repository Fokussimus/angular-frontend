import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';

import { AppRoutingModule } from './app-routing.module';

import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { ArticleListItemComponent } from './article-list-item/article-list-item.component';

import { ArticleResolver } from './article-resolver.service';

import { NgxMdModule } from 'ngx-md';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ArticlelistComponent,
    ArticledetailComponent,
    ArticleListItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    HttpModule,
    NgxMdModule.forRoot()
  ],
  providers: [DataService, ArticleResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

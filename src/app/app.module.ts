import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatToolbarModule, MatSelectModule, MatInputModule, MatDialogModule, MatButtonModule, MatChipsModule, MatIconModule} from '@angular/material';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';

import { AppRoutingModule } from './app-routing.module';

import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { ArticleListItemComponent } from './article-list-item/article-list-item.component';

import { ArticleResolver } from './article-resolver.service';

import { NgxMdModule } from 'ngx-md';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';

import { FormsModule } from '@angular/forms';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ArticlelistComponent,
    ArticledetailComponent,
    ArticleListItemComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    AppRoutingModule,
    MatChipsModule,
    HttpModule,
    NgxMdModule.forRoot(),
    LMarkdownEditorModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [DataService, ArticleResolver],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginDialogComponent
]
})
export class AppModule { }

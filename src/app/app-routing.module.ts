import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlelistComponent } from './articlelist/articlelist.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'articles',
        pathMatch: 'full'
    },
    {
        path: 'articles',
        component: ArticlelistComponent
    },
    {
        path: 'articles/:id',
        component: ArticledetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }

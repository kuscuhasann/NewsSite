import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsAddComponent } from './news/news-add/news-add.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: "news", component: NewsComponent },
  { path: "newsadd", component: NewsAddComponent },
  { path: "newsDetail/:newsId", component: NewsDetailComponent },
  { path: "**", redirectTo: "news", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

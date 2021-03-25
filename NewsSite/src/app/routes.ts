import { NgModule } from '@angular/core';
import { NewsAddComponent } from './news/news-add/news-add.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { Routes} from "@angular/router"
export const appRoutes : Routes = [
  
  { path: "news", component: NewsComponent },
  { path: "newsadd", component: NewsAddComponent },
  { path: "newsDetail/:newsId", component: NewsDetailComponent },
  { path: "news/category/:categoryId", component:NewsComponent},
  { path: "**", redirectTo: "news", pathMatch: "full" },


];

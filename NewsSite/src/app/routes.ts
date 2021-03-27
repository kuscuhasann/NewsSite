import { NgModule } from '@angular/core';
import { NewsAddComponent } from './news/news-add/news-add.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { Routes} from "@angular/router"
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
export const appRoutes : Routes = [
  
  { path: "akis", component: NewsComponent },
  { path: "newsadd", component: NewsAddComponent,canActivate:[LoginGuard]},
  { path: "haberler/:newsId/:title", component: NewsDetailComponent },
  { path: "haber/kategoriler/:categoryId/:categoryName", component:NewsComponent},
  { path: "parathormon", component:LoginComponent},
  { path: "**", redirectTo: "akis", pathMatch: "full" },

];

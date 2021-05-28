import { NgModule } from '@angular/core';
import { NewsAddComponent } from './news/news-add/news-add.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { Routes} from "@angular/router"
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
export const appRoutes : Routes = [
  
  { path: "news", component: NewsComponent },
  { path: "newsadd", component: NewsAddComponent,canActivate:[LoginGuard] },
  { path: "newsDetail/:newsId/:title", component: NewsDetailComponent },
  { path: "news/category/:categoryId/:categoryName", component:NewsComponent},
  { path: "parathormon", component:LoginComponent},
  { path: "gizlilik-politikasi", component:PrivacyPolicyComponent},
  { path: "**", redirectTo: "news", pathMatch: "full" },

];
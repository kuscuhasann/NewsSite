import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Router } from "@angular/router";
import { appRoutes } from "./routes";
import { NgxGalleryModule } from "ngx-gallery";
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {NgxEditorModule} from 'ngx-editor'
import {FileUploadModule} from 'ng2-file-upload'

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import {AlertifyService} from './services/alertify.service'
import { PhotoComponent } from './photo/photo.component';
import { NewsComponent } from './news/news.component';
import {NewsAddComponent} from "./news/news-add/news-add.component"
import { NewsDetailComponent } from "./news/news-detail/news-detail.component";
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { DownNavComponent } from './down-nav/down-nav.component';
import { LoginGuard } from "./login/login.guard";
import { AuthService } from "./services/auth.service";
import { CategoryService } from "./services/category.service";
import { NewsService } from "./services/news.service";


@NgModule({
   declarations: [				
      AppComponent,
      NavComponent,
      PhotoComponent,
      NewsDetailComponent,
      NewsAddComponent,
      NewsComponent,
      CategoryComponent,
      LoginComponent,
      DownNavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      FormsModule, ReactiveFormsModule,
      NgxEditorModule,
      FileUploadModule
   ],
  providers: [AlertifyService,LoginGuard,AuthService,CategoryService,NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

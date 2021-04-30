import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Router } from "@angular/router";
import { appRoutes } from "./routes";
import { NgxGalleryModule } from 'ngx-gallery-9';
import {AlertifyService} from './services/alertify.service'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {FileUploadModule} from 'ng2-file-upload'
import { CKEditorModule } from 'ng2-ckeditor';
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { PhotoComponent } from './photo/photo.component';
import { NewsComponent } from './news/news.component';
import {NewsAddComponent} from "./news/news-add/news-add.component"
import { NewsDetailComponent } from "./news/news-detail/news-detail.component";
import { LoginComponent } from './login/login.component';
import { DownNavComponent } from './down-nav/down-nav.component';
import { LoginGuard } from "./login/login.guard";
import { AuthService } from "./services/auth.service";
import { CategoryService } from "./services/category.service";
import { NewsService } from "./services/news.service";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderComponent } from './slider/slider.component';



@NgModule({
   declarations: [								
      AppComponent,
      NavComponent,
      PhotoComponent,
      NewsDetailComponent,
      NewsAddComponent,
      NewsComponent,
      LoginComponent,
      DownNavComponent,
      DownNavComponent,
      SliderComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule, ReactiveFormsModule,
      FileUploadModule,
      CKEditorModule,
      NgxGalleryModule,
      SlickCarouselModule,
   ],
  providers: [AlertifyService,LoginGuard,AuthService,CategoryService,NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

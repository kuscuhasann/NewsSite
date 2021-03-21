import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Router } from "@angular/router";
import { NgxGalleryModule } from "@kolkov/ngx-gallery";
import {NgxEditorModule} from 'ngx-editor';
import {FileUploadModule} from 'ng2-file-upload';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NewsComponent } from './news/news.component';
import { PhotoComponent } from './photo/photo.component';
import {AlertifyService} from './services/alertify.service'
import {NewsAddComponent} from "./news/news-add/news-add.component"
import { NewsDetailComponent } from "./news/news-detail/news-detail.component";
import { CategoryComponent } from './category/category.component';




@NgModule({
  declarations: [			
    AppComponent,
      NavComponent,
      NewsComponent,
      NewsDetailComponent,
      NewsAddComponent,
      PhotoComponent,
      CategoryComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxGalleryModule,
    FormsModule, ReactiveFormsModule,
    NgxEditorModule,
    FileUploadModule,
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

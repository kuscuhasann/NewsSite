import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NewsService } from "../../services/news.service";
import { News } from "../../models/news";
import { Photo } from "../../models/photo";
import {AuthService} from '../../services/auth.service'

import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from "ngx-gallery-9";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  providers: [NewsService]
})
export class NewsDetailComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService
  ) { }

  news: News;
  photos: Photo[] = []
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getNewsById(params["newsId"]);
    });
  }
  getNewsById(newsId) {
    this.newsService.getNewsById(newsId).subscribe(data => {
      this.news = data;
      this.getPhotosByNews(newsId)
    });
  }
  getPhotosByNews(newsId){
    this.newsService.getPhotosByNews(newsId).subscribe(data=>{
     
      this.photos = data;
      this.setGallery();
    })
  }

  getImages(){
    const imageUrls= []
    for(let i = 0;i<this.news.photos.length;i++){
      imageUrls.push({
        small:this.news.photos[i].url,
        medium:this.news.photos[i].url,
        big:this.news.photos[i].url
      })
    }
    return imageUrls;
  }
  get isAuthenticated(){
    return this.authService.loggedIn();
 }
  setGallery(){
    this.galleryOptions = [
      {
          width: '100%',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.galleryImages = this.getImages()
  }

}
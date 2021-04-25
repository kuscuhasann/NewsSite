import { Component, OnInit } from '@angular/core';
import { News } from "../models/news";
import { NewsService } from "../services/news.service";
import { ActivatedRoute } from '@angular/router';
import { Photo } from "../models/photo";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {

  constructor(
    private newsService: NewsService,
    private activatedRoute:ActivatedRoute,

    ) { }

  news: News[];
  

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
     
      if(params["categoryId"]){
        this.getNewsForCategories(params["categoryId"])
      }else{
        this.getNewsAll()
      }
      
    });
  }
  getNewsAll() {
    this.newsService.getNewsAll().subscribe(data=>{
      this.news = data
     
    })   
  }

  getNewsForCategories(categoryId:number) {
    this.newsService.getNewsForCategories(categoryId).subscribe(data=>{
      this.news = data
    })   
  }

 
}
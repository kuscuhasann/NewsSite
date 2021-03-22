import { Component, OnInit } from '@angular/core';
import { News } from "../models/news";
import { NewsService } from "../services/news.service";
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }
  news: News[];
  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      this.news = data;
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { News } from "../../models/news";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css'],
  providers: [NewsService]
})
export class NewsAddComponent implements OnInit {

  constructor(
    private newsService: NewsService,
    private formBuilder: FormBuilder,
    private authService:AuthService
  ) { }

  news: News;
  newsAddForm: FormGroup;

  createNewsForm() {
    this.newsAddForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.createNewsForm();
  }
  add(){
    if(this.newsAddForm.valid){
      this.news = Object.assign({},this.newsAddForm.value)
      this.news.userId = this.authService.getCurrentUserId();
      this.newsService.add(this.news);
      
      
    }
  }

}

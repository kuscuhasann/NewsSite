import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service";
import { Category } from '../../models/category';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { News } from "../../models/news";
import { AuthService } from "../../services/auth.service";
import { CategoryService } from 'src/app/services/category.service';
import { AlertifyService } from 'src/app/services/alertify.service';

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
    private authService:AuthService,
    private categoryService:CategoryService,
    private alertifyService:AlertifyService
  ) { }

  news: News;
  newsAddForm: FormGroup;
  category:Category[];
  model:News =new News();

  createNewsForm() {
    this.newsAddForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      categoryId:["",Validators.required]
    });
  }

  ngOnInit() {
    this.createNewsForm();
    this.getCategories();
  }
  add(){
    if(this.newsAddForm.valid){
      this.news = Object.assign({},this.newsAddForm.value)
      this.news.userId = this.authService.getCurrentUserId();
      this.newsService.add(this.news);
    }
  }
  getCategories()
  {
    this.categoryService.getCategories().subscribe(data=>{
      this.category=data;
      
    });
  }


}

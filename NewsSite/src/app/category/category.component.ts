import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private categoryService:CategoryService,
  ) { }

  category:Category[];
  ngOnInit() {
  this.getCategory();
  }
  getCategory()
  {
    this.categoryService.getCategories().subscribe(data=>{
      this.category=data;
    })
  }

}

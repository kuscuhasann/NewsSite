import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { CategoryService } from 'src/app/services/category.service';
import { Category } from "../models/category";
import { News } from "../models/news";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private categoryService: CategoryService,
    ) {}

  loginUser: any = {};
  category:Category[];
 

  ngOnInit() {
    this.getCategories();

  }

  get isAuthenticated(){
     return this.authService.loggedIn();
  }
  getCategories()
  {
    this.categoryService.getCategories().subscribe(data=>{
      this.category=data;

    });
  }
  logOut(){
    this.authService.logOut();
  }
}
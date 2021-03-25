import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { CategoryService } from 'src/app/services/category.service';
import { Category } from "../models/category";
import { NewsService } from "../services/news.service";
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
    private newsService:NewsService,
    ) {}

  loginUser: any = {};
  category:Category[];
 

  ngOnInit() {
    this.getCategories();
    
  }

  login() {
    this.authService.login(this.loginUser);
  }

  logOut(){
    this.authService.logOut();
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
  
  

}

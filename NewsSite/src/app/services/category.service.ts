import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { News } from "../models/news";
import { Photo } from "../models/photo";
import { AlertifyService } from "./alertify.service";
import { Router } from "@angular/router";
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
 

export class CategoryService {

constructor(private httpClient: HttpClient) { }

  path = "https://localhost:44322/api/categories";

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.path);
  }


}

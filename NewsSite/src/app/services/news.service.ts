import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { News } from "../models/news";
import { Photo } from "../models/photo";
import { AlertifyService } from "./alertify.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

constructor(private httpClient: HttpClient,    
  private alertifyService:AlertifyService,
  private router:Router) { }

path = "https://localhost:44322/api/";

getNews(): Observable<News[]> {
  return this.httpClient.get<News[]>(this.path + "news");
}
getNewsById(newsId):Observable<News>{
  return this.httpClient.get<News>(this.path+"news/detail/?id="+newsId)
}
//URL LER KONTROL EDİLECEK ORALAR DEĞİŞTİRİLMEDİ...
getPhotosByNews(newsId):Observable<Photo[]>{
  return this.httpClient.get<Photo[]>(this.path + "news/photos/?newsId="+newsId);
}

add(news){
this.httpClient.post(this.path + 'news/add',news).subscribe(data=>{
  this.alertifyService.success("Haber başarıyla eklendi.")
  this.router.navigateByUrl('/newsDetail/'+data["id"])
});
}

}

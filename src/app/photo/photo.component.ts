import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload'
import {AuthService} from '../services/auth.service'
import {ActivatedRoute} from '@angular/router'
import {Photo} from '../models/photo'
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private authService:AuthService,
    private alertifyService:AlertifyService,
    private activatedRoute:ActivatedRoute) { }

  photos:Photo[]=[];
  uploader:FileUploader;
  hasBaseDropZoneOver =false;
  baseUrl ='https://localhost:44322/api/';
  currentMain:Photo;
  currentNews:any;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.currentNews = params["newsId"]
    })
    this.initializeUploader();
  }
  get isAuthenticated(){
    return this.authService.loggedIn();
 }

  initializeUploader(){
    this.uploader =new FileUploader({
      url:this.baseUrl +'news/'+this.currentNews+'/photos',
      authToken: 'Bearer ' +localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType : ['image'],
      autoUpload:false,
      removeAfterUpload: true,
      maxFileSize:10*1024*1024
    })

    this.uploader.onSuccessItem = (item, response, status, headers)=>{
      if(response){
        const res :Photo = JSON.parse(response);
        const photo ={
          id:res.id,
          url:res.url,
          dateAdded:res.dateAdded,
          isMain:res.isMain,
          newsId:res.newsId
        }
        this.photos.push(photo)
        
      }
    }
  }

}

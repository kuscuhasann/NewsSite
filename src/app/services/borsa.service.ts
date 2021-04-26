import { Injectable } from '@angular/core';
import { Doviz } from '../models/doviz.ts.service';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class BorsaService {

constructor(private httpClient: HttpClient) { }

  path = "https://api.genelpara.com/embed/para-birimleri.json";

  getCategories(): Observable<Doviz[]> {
  return this.httpClient.get<Doviz[]>(this.path);
  }

}

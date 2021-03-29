import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})


export class ArticleService {


  constructor(private _http: HttpClient) { }
  
  getListArticle(): Observable<any> {

    console.log("service getListArticle works");
    return this._http.get<Article[]>('http://127.0.0.1:8000/api/articles/list');

  }
  
 
  getArticle(id): Observable<any>{
    console.log("service getListArticle works");
    return this._http.get<Article[]>('http://127.0.0.1:8000/api/articles/'+id);
  }
  getArticlesCarousel(): Observable<any> {
    console.log("service getListArticles carousel works");
    return this._http.get<Article[]>('http://127.0.0.1:8000/api/articles/carousel');
  }
  

}

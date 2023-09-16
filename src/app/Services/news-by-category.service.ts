import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewsByCategoryService {

  todayDate:Date = new Date();
  dateString:string = this.todayDate.toISOString();
  year:string = this.dateString.substring(0,4);
  month:string = this.dateString.substring(5,2);
  day:string = this.dateString.substring(8,2);

  constructor(private newsApi: HttpClient) { }

  getNews(category: string): Observable<any> {
    return this.newsApi.get(environment.baseUrl + `top-headlines?country=us&category=${category}&apiKey=` + environment.apiKey)
  }

  newsForSlider(): Observable<any> {
    return this.newsApi.get(environment.baseUrl + `everything?q=general&from=${this.year}-${this.month}-${this.day}&sortBy=popularity&apiKey=` + environment.apiKey)
  }

  initSources() {
    return this.newsApi.get(environment.baseUrl + 'sources?language=en&apiKey=' + environment.apiKey)
  }

  getArticleById(source: any) {
    return this.newsApi.get(environment.baseUrl + 'top-headlines?sources=' + source.id + '&apiKey=' + environment.apiKey)
  }

  initArticles() {
    return this.newsApi.get(environment.baseUrl + 'top-headlines?sources=techcrunch&apiKey=' + environment.apiKey)
  }
}

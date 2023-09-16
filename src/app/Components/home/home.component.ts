import { NewsByCategoryService } from 'src/app/Services/news-by-category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalLength:any;
  p1: number = 1;
  p2: number = 1;
  itemsPerPage: number = 6;
  generalNews = [];
  sportNews = [];
  businessNews = [];
  mainEntertainmentNews = [];
  entertainmentNews = [];
  mainHealthNews = [];
  healthNews = [];
  techNews = [];


  constructor(private _NewsByCategoryService:NewsByCategoryService) {

  }


  ngOnInit(): void {
    this.getGeneralNews();
    this.getSportNews();
    this.getBusinessNews();
    this.getEntertainmentNews();
    this.getTechNews();
    this.getHealthNews();
  }

  getGeneralNews() {
    this._NewsByCategoryService.getNews("general").subscribe({
      next:(response) => {
        // console.log(response.articles);
        this.generalNews = response.articles.slice(0,5);
      }
    })
  }

  getSportNews() {
    this._NewsByCategoryService.getNews("sport").subscribe({
      next:(response) => {
        this.sportNews = response.articles;
        // console.log(this.sportNews);
      }
    })
  }

  getBusinessNews() {
    this._NewsByCategoryService.getNews("business").subscribe({
      next:(response) => {
        this.businessNews = response.articles.slice(0,4);
        // console.log(this.businessNews);
      }
    })
  }

  getEntertainmentNews() {
    this._NewsByCategoryService.getNews("entertainment").subscribe({
      next:(response) => {
        this.mainEntertainmentNews = response.articles.slice(0,1);
        this.entertainmentNews = response.articles.slice(1,4);
        // console.log(this.entertainmentNews);
      }
    })
  }

  getTechNews() {
    this._NewsByCategoryService.getNews("technology").subscribe({
      next:(response) => {
        this.techNews = response.articles;
        // console.log(this.techNews);
        this.totalLength = this.techNews.length;
      }
    })
  }

  getHealthNews() {
    this._NewsByCategoryService.getNews("health").subscribe({
      next:(response) => {
        this.mainHealthNews = response.articles.slice(0,1);
        this.healthNews = response.articles.slice(1,3);
        // console.log(this.healthNews);
      }
    })
  }
}

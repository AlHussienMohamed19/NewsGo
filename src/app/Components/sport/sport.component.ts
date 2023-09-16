import { Component, OnInit } from '@angular/core';
import { NewsByCategoryService } from 'src/app/Services/news-by-category.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit{
  articles:any = [];
  constructor(private newsService:NewsByCategoryService) {}

  ngOnInit(): void {
    this.newsService.getNews('sport').subscribe({
      next:(response)=> {
        console.log(response);
        this.articles = response.articles;
      },
      error:()=>{
        
      },
      complete:() => {

      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { NewsByCategoryService } from 'src/app/Services/news-by-category.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  articles:any = [];
  constructor(private newsService:NewsByCategoryService) {}

  ngOnInit(): void {
    this.newsService.getNews('business').subscribe({
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

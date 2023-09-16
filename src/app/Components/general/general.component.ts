import { Component, OnInit } from '@angular/core';
import { NewsByCategoryService } from 'src/app/Services/news-by-category.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  articles:any = [];
  constructor(private newsService:NewsByCategoryService) {}

  ngOnInit(): void {
    this.newsService.getNews('general').subscribe({
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

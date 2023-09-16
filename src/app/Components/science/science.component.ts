import { Component } from '@angular/core';
import { NewsByCategoryService } from 'src/app/Services/news-by-category.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent {

  articles:any = [];
  constructor(private newsService:NewsByCategoryService) {}

  ngOnInit(): void {
    this.newsService.getNews('science').subscribe({
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

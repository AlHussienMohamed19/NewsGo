import { Component } from '@angular/core';
import { NewsByCategoryService } from 'src/app/Services/news-by-category.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {

  articles:any = [];
  constructor(private newsService:NewsByCategoryService) {}

  ngOnInit(): void {
    this.newsService.getNews('technology').subscribe({
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

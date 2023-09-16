import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NewsByCategoryService } from 'src/app/Services/news-by-category.service';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {
  allNewsArray: any = [];
  sliderNews: any = [];
  testArray: any = [
    "../../../assets/breakingNews.jpg",
    "../../../assets/christmas-present-shopping-cart.jpg",
    "../../../assets/pexels-karolina-grabowska-5632371.jpg"
  ];
  
  constructor(private newsService: NewsByCategoryService) {

  }

  ngOnInit(): void {
    this.newsService.newsForSlider().subscribe({
      next:(response)=> {
        // console.log(response);
        this.allNewsArray = response.articles;
        this.sliderNews = this.allNewsArray.slice(0, 5);
      }
    })
  }

  customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
}

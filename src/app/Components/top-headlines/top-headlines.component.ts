import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject, Subscription } from 'rxjs';
import { NavServiceService } from 'src/app/Services/nav-service.service';
import { NewsByCategoryService } from 'src/app/Services/news-by-category.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit, AfterViewInit, OnDestroy {
  sideNavBarEl:any = document.getElementById("sideNavBar");
  title = 'News-App';
  sources: any = [];
  articles: any = [];
  ActivatedPage: string = "Top 10 Trending News";
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  public sideNavButtonStatue = new BehaviorSubject<boolean>(false);
  clrSubscribe!: Subscription;
  // side = false;
  constructor(private newsApi: NewsByCategoryService,
              private navService: NavServiceService,
              private cdr: ChangeDetectorRef,
              private observor: BreakpointObserver) { }

  ngAfterViewInit(): void {
    this.observor.observe(['(max-width:1300px)']).subscribe((response) => {
      if (response?.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
        this.navService.openAndCloseBtn.subscribe(
          (isOpen) => {
            this.sideNavButtonStatue.next(isOpen);
            if (this.sideNavButtonStatue.getValue() === true) {
              console.log("El mfrod tft7 hna");
              this.sideNav.mode = 'over';
              this.sideNav.open();
              this.sideNav.opened = true;
            } else {
              console.log("El mfrod t2fl hna");
              this.sideNav.mode = 'over';
              this.sideNav.close();
              this.sideNav.opened = false;
            }
          })
        this.cdr.detectChanges();
      }
      else {
        // this.sideNav.opened = true;
        this.sideNav.mode = 'over';
        console.log("El mfrod tft7 hna");
        this.sideNav.open();
      }
    })
  }



  ngOnInit(): void {

    this.newsApi.initSources().subscribe({
      next: (response: any) => {
        console.log(response.sources);
        this.sources = response.sources
      },
      error: () => {

      },
      complete: () => {
      }
    });

    this.newsApi.initArticles().subscribe({
      next: (response: any) => {
        console.log(response.articles);
        this.articles = response.articles
      },
      error: () => {

      },
      complete: () => {

      }
    });
  }

  searchSourceById(source: any) {
    this.newsApi.getArticleById(source).subscribe({
      next: (response: any) => {
        console.log(response);
        this.articles = response.articles;
        this.ActivatedPage = source.name;
      },
      error: () => {

      },
      complete: () => {

      }
    })
  }


  ngOnDestroy(): void {
    this.clrSubscribe.unsubscribe();
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { BusinessComponent } from './Components/business/business.component';
import { EntertainmentComponent } from './Components/entertainment/entertainment.component';
import { GeneralComponent } from './Components/general/general.component';
import { HealthComponent } from './Components/health/health.component';
import { ScienceComponent } from './Components/science/science.component';
import { SportComponent } from './Components/sport/sport.component';
import { TechnologyComponent } from './Components/technology/technology.component';
import { TopHeadlinesComponent } from './Components/top-headlines/top-headlines.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { SliceStringPipe } from './Core/Pipes/slice-string.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeSliderComponent } from './Components/home-slider/home-slider.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FooterComponent } from './Components/footer/footer.component';
import { LoadingScreenComponent } from './Components/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BusinessComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    ScienceComponent,
    SportComponent,
    TechnologyComponent,
    TopHeadlinesComponent,
    NotFoundComponent,
    SliceStringPipe,
    HomeSliderComponent,
    FooterComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    CarouselModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent , title:'home' },
  { path: 'business', component: BusinessComponent, title:'business' },
  { path: 'entertainment', component: EntertainmentComponent , title:'entertainment'},
  { path: 'general', component: GeneralComponent , title:'general'},
  { path: 'health', component: HealthComponent , title:'health'},
  { path: 'science', component: ScienceComponent , title:'science'},
  { path: 'sport', component: SportComponent , title:'sport'},
  { path: 'technology', component: TechnologyComponent , title:'technology'},
  { path: 'top-headlines', component: TopHeadlinesComponent , title:'top-headlines'},
  { path: '**', component: NotFoundComponent , title:'NotFound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

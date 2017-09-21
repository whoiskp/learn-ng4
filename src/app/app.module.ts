import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';
import { HeroBirthdayComponent } from './hero-birthday.component';

import { ExponentialStrength } from './pipes/exponential-strength.pipe';

import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroBirthdayComponent,
    ExponentialStrength
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

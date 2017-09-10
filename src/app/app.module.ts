import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

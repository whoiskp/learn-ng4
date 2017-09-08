import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Hello Angular 4';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getListHero();
  }
  getListHero(): void {
    this.heroService.getHerosSlowly().then(
      heroes => this.heroes = heroes
    );
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


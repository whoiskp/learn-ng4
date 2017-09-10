import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-component',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    providers: [HeroService]
})
export class HeroComponent implements OnInit {
    title = 'Hello Angular 4';
    heroes: Hero[];
    selectedHero: Hero;
    constructor(
        private router: Router,
        private heroService: HeroService) {
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

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}


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

    add(name: string): void {
        name = name.trim();
        if (!name) { return }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            });

    }
}


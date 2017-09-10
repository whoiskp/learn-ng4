import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [HeroService]
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];
    ngOnInit(): void {
        this.heroService.getHeros().then(
            heros => this.heroes = heros.slice(1, 5)
        );
    }
    constructor(private heroService: HeroService) {
    }
}

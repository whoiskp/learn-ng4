import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHerosSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeros()), 2000);
        });
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeros()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}
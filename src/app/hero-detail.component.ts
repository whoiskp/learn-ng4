import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    styleUrls: ['./hero-detail.component.scss'],
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}
/**
 * Created by James Liauw on 2016/9/17 0017.
 */
import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];

    constructor(
        private heroService: HeroService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
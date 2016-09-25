/**
 * Created by James Liauw on 2016/9/17 0017.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Hero }         from "./hero";
import { HeroService }  from './hero.service';

// 使用小写 中线命名法 ( 也叫 烤串命名法 ) 拼写文件名
// 所有组件名都以 Component 结尾。所有组件的文件名都以 .component 结尾。
// 用于标示组件类型的类
@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{

    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute ) {
    }

    ngOnInit(): void {
        this.route.params.forEach(
            (params: Params) => {
                let id = +params['id'];
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero);
            }
        );
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(this.goBack);
    }

    goBack(): void {
        window.history.back();
    }
}
/**
 * Created by James Liauw on 2016/9/16 0016.
 */
import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { Hero }         from "./hero";
import { HeroService }  from './hero.service';

// 单向数据绑定的“插值表达式”形式
// ngIf 和 ngFor 被称为“结构型指令”，因为它们可以修改 DOM 的部分结构。
// 换句话说，它们让 Angular 在 DOM 中显示内容的方式结构化了。

// 模板中的 class.selected 是括在一对方括号中的。
// 这就是“属性绑定”的语法
// 一种从数据源 ( 即 hero === selectedHero 表达式 ) 到 class 属性的单向数据流。
@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router) {
    }

    /**
     * 异步返回模拟
     */
    getHeroes(): void {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    /**
     * 添加操作
     * @param name
     */
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    /**
     * 删除操作
     * @param hero
     */
    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

    /**
     * 实现 Angular 的 ngOnInit 生命周期钩子 ，
     * Angular 就会主动调用这个钩子。
     * Angular 提供了一些接口，用来介入组件生命周期的几个关键时间点：
     * 刚创建时、每次变化时，以及最终被销毁时。
     * 带有初始化逻辑的 ngOnInit 方法，然后留给 Angular ，供其在正确的时机调用
     */
    ngOnInit():void {
        this.getHeroes();
    }

    /**
     * 点击处理
     * @param hero
     */
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    /**
     * 详细页跳转
     */
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
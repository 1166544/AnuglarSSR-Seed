/**
 * Created by James Liauw on 2016/9/17 0017.
 */
import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { Subject }              from 'rxjs/Subject';

import { HeroSearchService }    from './hero-search.service';
import { Hero } from './hero';

@Component({
    selector: 'hero-search',
    templateUrl: 'app/hero-search.component.html',
    styleUrls: ['app/hero-search.component.css'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router) {
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)          // 延迟处理
            .distinctUntilChanged()     // 确保只在过滤条件变化时才发送请求
            .switchMap(term => term     // 会为每个从 debounce 和 distinctUntilChanged 中通关的搜索词调用搜索服务。它会丢弃以前的搜索 Observable ，只保留最近的。
            ? this.heroSearchService.search(term)
            : Observable.of<Hero[]>([]))
            .catch(error => {           // 拦截失败的 Observable
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
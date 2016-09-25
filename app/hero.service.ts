/**
 * 服务遵循的文件命名约定是：服务名称的小写形式 ( 基本名 ) ，加上 .service 后缀。 如果服务名称包含多个单词，我们就把基本名部分写成中线形式 (dash-case ，
 * 也被称作烤串形式 kebab-case) 。
 * 比如， SpecialSuperHeroService 服务应该被定义在 special-super-hero.service.ts 文件中。
 * Created by James Liauw on 2016/9/17 0017.
 */
import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
    // 引入 Angular 的 Injectable 函数，并通过 @Injectable() 装饰器使用这个函数。
    // 不要忘了写圆括号！ 如果忘了写，就会导致一个很难诊断的错误。
    // 当 TypeScript 看到 @Injectable() 装饰器时，就会记下本服务的元数据。
    // 如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。

    private headers = new Headers({'Content-Type': 'application/json'});
    private heroesUrl = 'api/heroes';

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        // return this.http.get(this.heroesUrl)
        //     .toPromise()
        //     .then(response => response.json().data as Hero[])
        //     .catch(this.handleError);
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)).then(() => this.getHits()
        )
    }

    getHits(): Hero[] {
        let heroes = [
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'Narco'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Celeritas'},
            {id: 15, name: 'Magneta'},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'}
        ];
        return heroes;
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id == id));
    }

    delete(id: number): Promise<void> {
        let url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    /**
     * 模拟网络调用
     * @returns {Promise<Hero[]>}
     */
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)).then(() => this.getHeroes()
        );
    }
}
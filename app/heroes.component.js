"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by James Liauw on 2016/9/16 0016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
// 单向数据绑定的“插值表达式”形式
// ngIf 和 ngFor 被称为“结构型指令”，因为它们可以修改 DOM 的部分结构。
// 换句话说，它们让 Angular 在 DOM 中显示内容的方式结构化了。
// 模板中的 class.selected 是括在一对方括号中的。
// 这就是“属性绑定”的语法
// 一种从数据源 ( 即 hero === selectedHero 表达式 ) 到 class 属性的单向数据流。
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    /**
     * 异步返回模拟
     */
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService
            .getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    /**
     * 添加操作
     * @param name
     */
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    /**
     * 删除操作
     * @param hero
     */
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    /**
     * 实现 Angular 的 ngOnInit 生命周期钩子 ，
     * Angular 就会主动调用这个钩子。
     * Angular 提供了一些接口，用来介入组件生命周期的几个关键时间点：
     * 刚创建时、每次变化时，以及最终被销毁时。
     * 带有初始化逻辑的 ngOnInit 方法，然后留给 Angular ，供其在正确的时机调用
     */
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    /**
     * 点击处理
     * @param hero
     */
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    /**
     * 详细页跳转
     */
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            templateUrl: 'app/heroes.component.html',
            styleUrls: ['app/heroes.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map
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
 * Created by James Liauw on 2016/9/17 0017.
 */
var core_1 = require('@angular/core');
// a 标签中的 [routerLink] 绑定。
// 把 RouterLink 指令 (ROUTER_DIRECTIVES 中的另一个指令 ) 绑定到一个数组。
// 它将告诉路由器，当用户点击这个链接时，应该导航到哪里。
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{ title }}</h1>\n        <nav>\n            <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n            <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n        </nav>\n        <router-outlet></router-outlet>\n    ",
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
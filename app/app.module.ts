import './rxjs-extensions';

import {APP_BASE_HREF}      from '@angular/common';
import { NgModule }         from "@angular/core";
import { BrowserModule }    from "@angular/platform-browser";
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from "./hero-search.component";
import { routing }              from './app.routing';

// 使表单输入支持双向数据绑定方法：
// 导入 FormsModule 模块，把它添加到 NgModule 装饰器的 imports 数组中
// 该数组是应用中用到的外部模块列表。
// 这样我们就引入了包括 ngModel 在内的表单依赖捆
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService,
        {provide: APP_BASE_HREF, useValue : '/' }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    // hole
}
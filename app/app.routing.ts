/**
 * Created by James Liauw on 2016/9/17 0017.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from "./hero-detail.component";

// “路由定义”包括几个部分：
// path: 路由器会用它来匹配路由中指定的路径和浏览器地址栏中的当前路径，如 /heroes 。
// component: 导航到此路由时，路由器需要创建的组件，如 HeroesComponent 。
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    }
];

// 调用 forRoot 方法是因为要在应用程序根部提供配置好的路由。
// forRoot 方法为我们提供了路由需要的服务提供商和指令。
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
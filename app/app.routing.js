"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require("./hero-detail.component");
// “路由定义”包括几个部分：
// path: 路由器会用它来匹配路由中指定的路径和浏览器地址栏中的当前路径，如 /heroes 。
// component: 导航到此路由时，路由器需要创建的组件，如 HeroesComponent 。
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }
];
// 调用 forRoot 方法是因为要在应用程序根部提供配置好的路由。
// forRoot 方法为我们提供了路由需要的服务提供商和指令。
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
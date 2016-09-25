/**
 * Created by James Liauw on 2016/9/17 0017.
 */
import { Component } from '@angular/core';

// a 标签中的 [routerLink] 绑定。
// 把 RouterLink 指令 (ROUTER_DIRECTIVES 中的另一个指令 ) 绑定到一个数组。
// 它将告诉路由器，当用户点击这个链接时，应该导航到哪里。
@Component({
    selector: 'my-app',
    template:  `
        <h1>{{ title }}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
}
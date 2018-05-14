import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';

/**
 * 主程序文件
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * 媒体查询列表
   */
  public mobileQuery: MediaQueryList;

  /**
   * 导航列表
   */
  public navList: Array<any> = [
    {
      name: '主页',
      link: '/',
      icon: 'home'
    }, {
      name: '搜索',
      link: '/search',
      icon: 'search'
    }, {
      name: '翻译',
      link: '/translate',
      icon: 'g_translate'
    }
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  OnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

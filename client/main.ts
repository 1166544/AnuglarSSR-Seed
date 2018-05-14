import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// 切入APP和配置入口
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// 生产模式标记
if (environment.production) {
  enableProdMode();
}

// 生产环境使用PWA
document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
    if ('serviceWorker' in navigator && environment.production) {
      navigator.serviceWorker.register('/ngsw-worker.js');
    }
  }).catch(err => console.log(err))
});

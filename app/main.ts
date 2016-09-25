/**
 * Created by James Liauw on 2016/9/16 0016.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platfrom = platformBrowserDynamic();
platfrom.bootstrapModule(AppModule);
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

// 设置生产模式标记
enableProdMode();

// 设置端口号和输出目录
const PORT = process.env.PORT || 4200;
const DIST_FOLDER = join(process.cwd(), `app/ngSources`);

// 建立服务器、模板、服务端模块
const app = express();
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
const { AppServerModuleNgFactory } = require('main.server');

// 设置渲染引擎
app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  console.log('renderURL:::::::', opts.url);
  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then((html) => {
      console.log('renderHTML::::::', html);
      callback(null, html);
    });
});

// 设置渲染引擎后缀
app.set('view engine', 'html');
app.set('views', 'client');

// 静态资源browser目录指向
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// 所有路由拦截，渲染index文件
app.get('*', (req, res) => {
  res.render('index', { req })
});

// 监听端口
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});

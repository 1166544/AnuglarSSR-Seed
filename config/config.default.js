'use strict';

const fs = require('fs');
const path = require('path');

module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '123456';

    // 静态资源目录
    config.sources = 'ngSources';

    // config.siteFile = {
    //   '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
    // };

    config.news = {
        pageSize: 30,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
            '.nj': 'nunjucks',
        },
    };

    // 静态资源配置
    config.static = {
        prefix: '/',
        maxAge: 0,
        buffer: false,
        dir: path.join(appInfo.baseDir, `app/${config.sources}/browser`)
    };

    return config;
};

'use strict';
const ngRouter = require('./routers/NgRouter');
const testRouter = require('./routers/TestRouter');

module.exports = (app) => {

    // 服务端渲染路由
    if (app.config.env === 'prod') {
        ngRouter(app);
    }

    // 测试用路由
    testRouter(app);
};

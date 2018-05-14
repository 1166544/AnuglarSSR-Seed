'use strict';

module.exports = app => {
    // 服务端渲染路由
    require('./routers/NgRouter')(app);

    // 测试用路由
    require('./routers/TestRouter')(app);
};

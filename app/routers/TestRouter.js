'use strict';

module.exports = (app) => {

    const {
        controller
    } = app;

    app.router.get('/test', controller.test.test.index);

};

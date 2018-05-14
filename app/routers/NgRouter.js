'use strict';

module.exports = (app) => {

    const {
        controller
    } = app;

    app.router.get('/', controller.ng.ng.index);
    app.router.get('/translate', controller.ng.ng.index);
    app.router.get('/search', controller.ng.ng.index);
    app.router.get('/detail/:word', controller.ng.ng.index);

};

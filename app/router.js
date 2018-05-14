'use strict';

module.exports = app => {
  const { router, controller } = app;

  app.get('/', controller.ng.ng.index);
  app.get('/translate', controller.ng.ng.index);
  app.get('/search', controller.ng.ng.index);
  app.get('/detail/:word', controller.ng.ng.index);
};

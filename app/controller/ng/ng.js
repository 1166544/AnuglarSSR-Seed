'use strict';

const Controller = require('egg').Controller;

class NgIndexController extends Controller {

  async index() {
    const { ctx } = this;
    const pageData = {};

    await ctx.renderSSR(pageData);
  }

}

module.exports = NgIndexController;

'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {

  async index() {
    const { ctx, app } = this;
    const pageSize = app.config.news.pageSize;
    const page = parseInt(ctx.query.page) || 1;

    const idList = await ctx.service.testService.getTopStories(page);

    // get itemInfo parallel
    const newsList = await Promise.all(idList.map(id => ctx.service.testService.getItem(id)));
    await ctx.render('test/list.tpl', { list: newsList, page, pageSize });
  }

  async detail() {
    const { ctx } = this;
    const id = ctx.params.id;
    const newsInfo = await ctx.service.testService.getItem(id);
    // get comment parallel
    const commentList = await Promise.all(newsInfo.kids.map(id => ctx.service.testService.getItem(id)));
    await ctx.render('news/detail.tpl', { item: newsInfo, comments: commentList });
  }

  async user() {
    const { ctx } = this;
    const id = ctx.params.id;
    const userInfo = await ctx.service.testService.getUser(id);
    await ctx.render('news/user.tpl', { user: userInfo });
  }
}

module.exports = TestController;

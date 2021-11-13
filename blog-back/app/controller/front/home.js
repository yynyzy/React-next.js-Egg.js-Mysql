const Controller = require('egg').Controller;

class HomeController extends Controller {
  //获取所有文章
  async getArticleList() {
    const { ctx } = this
    const result = await ctx.service.front.home.getArticleList()
    ctx.body = {
      data: result
    }
  }
  //根据id获取文章
  async getArticleById() {
    const { ctx } = this
    const id = ctx.params
    const result = await ctx.service.front.home.getArticleById(id)
    ctx.body = {
      data: result
    }
  }
}

module.exports = HomeController;

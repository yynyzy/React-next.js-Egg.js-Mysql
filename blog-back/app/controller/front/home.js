const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getArticleList() {
    const { ctx } = this
    const result = await ctx.service.front.home.getArticleList()
    ctx.body = {
      data: result
    }
  }

}

module.exports = HomeController;

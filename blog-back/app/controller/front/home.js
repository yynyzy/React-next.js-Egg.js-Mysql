const Controller = require('egg').Controller;

class HomeController extends Controller {
  //获取所有文章
  async getArticleList() {
    const { ctx, service } = this
    const result = await service.front.home.getArticleList()
    ctx.body = {
      data: result
    }
  }
  //根据id获取文章
  async getArticleById() {
    const { ctx, service } = this
    const { id } = ctx.params
    const result = await service.front.home.getArticleById(id)
    ctx.body = {
      data: result
    }
  }

  //得到header组件标签分类名称和编号
  async getHeaderBarType() {
    const { ctx, service } = this
    const result = await service.front.home.getHeaderBarType()
    ctx.body = { data: result }

  }
}

module.exports = HomeController;

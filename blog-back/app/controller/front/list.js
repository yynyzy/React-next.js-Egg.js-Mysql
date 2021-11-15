const Controller = require('egg').Controller;

class ListController extends Controller {
    async getListById() {
        const { ctx } = this
        const result = await ctx.service.front.list.getListById()
        this.ctx.body = { data: result }
    }
}

module.exports = ListController;
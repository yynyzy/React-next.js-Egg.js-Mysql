const Controller = require('egg').Controller;

class ListController extends Controller {
    async getListById() {
        const { ctx, service } = this
        const result = await service.front.list.getListById()
        ctx.body = { data: result }
    }
}

module.exports = ListController;
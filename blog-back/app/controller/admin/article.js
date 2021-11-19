const Controller = require('egg').Controller

class Article extends Controller {
    async getArticleType() {
        this.ctx.body = "123"
    }
}

module.exports = Article
const Controller = require('egg').Controller

class Article extends Controller {
    async getArticleType() {
        const { ctx, service } = this
        try {
            const result = await service.admin.article.getArticleType()
            console.log("123");
            ctx.body = result
        } catch (error) {
            // ctx.logger.error(error.message)
            console.log(error);
        }
    }
}

module.exports = Article
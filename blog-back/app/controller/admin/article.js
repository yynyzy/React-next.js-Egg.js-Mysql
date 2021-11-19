const Controller = require('egg').Controller

class Article extends Controller {
    async getArticleType() {
        const { ctx, service } = this
        try {
            const result = await service.admin.article.getArticleType()
            ctx.body = {
                code: '200',
                data: result
            }
        } catch (error) {
            // ctx.logger.error(error.message)
            console.log(error);
        }
    }
}

module.exports = Article
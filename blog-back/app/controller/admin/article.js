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

    //添加文章
    async addArticle() {
        const { ctx, service } = this
        const { id } = ctx.user
        let dataProps = ctx.request.body
        dataProps.auth_id = id
        console.log(dataProps);
        try {
            const result = await service.admin.article.addArticle(dataProps)
            console.log(result);
            const insertSuccess = result.affectedRows === 1
            const insertId = result.insertId
            this.ctx.body = {
                code: '200',
                isScuccess: insertSuccess,
                insertId: insertId
            }
        } catch (error) {
            // ctx.logger.error(error.message)
            console.log(error);
        }
    }
}

module.exports = Article
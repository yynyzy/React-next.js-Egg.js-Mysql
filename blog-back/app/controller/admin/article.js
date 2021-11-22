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
        try {
            const result = await service.admin.article.addArticle(dataProps)
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

    //修改文章
    async updateArticle() {
        const { ctx, service } = this
        let dataProps = ctx.request.body
        try {
            const result = await service.admin.article.updateArticle(dataProps)
            const insertSuccess = result.affectedRows === 1
            this.ctx.body = {
                code: '200',
                isScuccess: insertSuccess
            }
        } catch (error) {
            // ctx.logger.error(error.message)
            console.log(error);
        }
    }
    //获取文章列表
    async getArticleList() {
        const { ctx, service } = this
        const { id } = ctx.user
        const result = await service.admin.article.getArticleList(id)
        console.log(result);
        this.ctx.body = { data: result }
    }
}

module.exports = Article
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

    //添加文章后直接修改当前文章
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
        this.ctx.body = { data: result }
    }

    //删除文章
    async delArticle() {
        const { ctx, service } = this
        const { articleId } = ctx.params
        const result = await service.admin.article.delArticle(articleId)
        console.log(result);
        this.ctx.body = { data: result }
    }

    //根据list中的文章修改指定Id的文章内容
    async getArticleByIdToUpdate() {
        const { ctx, service } = this
        let { articleId } = ctx.params
        const result = await service.admin.article.getArticleByIdToUpdate(articleId)
        this.ctx.body = { data: result }
    }
}

module.exports = Article
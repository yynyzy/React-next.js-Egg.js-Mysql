const Service = require('egg').Service
class Article extends Service {
    async getArticleType() {
        const statement = `
        SELECT type.type_name name, type.type_order torder FROM	blog_type type
        `
        const result = await this.app.mysql.query(statement)
        return result
    }
}

module.exports = Article
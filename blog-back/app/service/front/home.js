// 从数据库中获取首页文章信息列表
const Service = require('egg').Service;

class HomeService extends Service {
    async getArticleList() {
        const statement = `
        SELECT
        bAct.article__type_id       id,
        bAct.article_title		    title, 
        bAct.article_introduce      introduce, 
        bAct.article_view_count     viewCount, 
        bType.type_name             typeName,
        bType.createAt              createTime
        FROM blog_article bAct 
        LEFT JOIN blog_type bType 
        ON bAct.id = bType.id
        `
        const result = await this.app.mysql.query(statement)
        return result
    }
    //根据id获取文章
    async getArticleById(id) {
        const statement = `
        SELECT
        bAct.article__type_id       id,
        bAct.article_title		    title, 
        bAct.article_introduce      introduce, 
        bAct.article_content        content, 
        bAct.article_view_count     viewCount, 
        bType.type_name             typeName ,
        bType.createAt              createTime
        FROM blog_article bAct 
        LEFT JOIN blog_type bType 
        ON bAct.id = bType.id
        WHERE bAct.id = ?
        `
        console.log(id);
        const result = await this.app.mysql.query(statement, [id])
        return result
    }
}
module.exports = HomeService











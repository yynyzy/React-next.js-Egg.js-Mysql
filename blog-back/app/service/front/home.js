// 从数据库中获取首页文章信息列表
const Service = require('egg').Service;

class HomeService extends Service {
    async getArticleList() {
        const statement = `
        SELECT
        bAct.article__type_id       id,
        bAct.article_title		    title, 
        bAct.article_introduce      introduce, 
        bAct.article_addTime        addTime,
        bAct.article_view_count     viewCount, 
        bType.type_name             typeName 
        FROM blog_article bAct 
        LEFT JOIN blog_type bType 
        ON bAct.id = bType.id
        `
        const result = await this.app.mysql.query(statement)
        console.log(result);
        return result
    }
}
module.exports = HomeService











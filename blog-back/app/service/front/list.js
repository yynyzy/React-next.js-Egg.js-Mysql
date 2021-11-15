// 从数据库中获取首页文章信息列表
const Service = require('egg').Service;

class ListService extends Service {

    //根据类别ID获得文章列表
    async getListById() {
        let { id } = this.ctx.params
        const statement = `
        SELECT
        bAct.id                     id,
        bAct.article_title		      title, 
        bAct.article_introduce      introduce, 
        bAct.article_view_count     viewCount, 
        bType.type_name             typeName,
        bType.createAt              createTime
        FROM blog_article bAct 
        LEFT JOIN blog_type bType 
        ON bAct.article_type_id = bType.id
        WHERE  bType.id = ?
        `
        const result = await this.app.mysql.query(statement, [id])
        console.log(result);
        return result
    }
}

module.exports = ListService
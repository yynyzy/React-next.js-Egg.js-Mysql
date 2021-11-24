// 从数据库中获取首页文章信息列表
const Service = require('egg').Service;

class HomeService extends Service {
    async getArticleList() {
        const statement = `
        SELECT
        bAct.id                     id,
        bAct.article_type_id        typeid,
        bAct.article_title		      title, 
        bAct.article_introduce      introduce, 
        bAct.article_view_count     viewCount, 
        bType.type_name             typeName,
        bType.createAt              createTime
        FROM blog_article bAct 
        LEFT JOIN blog_type bType 
        ON bAct.article_type_id = bType.id
        `
        const result = await this.app.mysql.query(statement)
        return result
    }
    //根据id获取文章
    async getArticleById(id) {
        const statement = `
        SELECT
        bArt.id                     id,
        bArt.article_type_id        typeid,
        bArt.article_title		    title, 
        bArt.article_introduce      introduce, 
        bArt.article_content        content, 
        bArt.article_view_count     viewCount, 
        bType.type_name             typeName,
        FROM_UNIXTIME(bArt.article_addTime,'%Y-%m-%d' )    addTime,
        FROM blog_article bArt 
        LEFT JOIN blog_type bType 
        ON bArt.article_type_id = bType.id
        WHERE bArt.id = ?
        `
        const result = await this.app.mysql.query(statement, [id])
        return result
    }

    //得到header组件标签分类名称和编号
    async getHeaderBarType() {
        const result = await this.app.mysql.select('blog_type')
        return result
    }
}
module.exports = HomeService











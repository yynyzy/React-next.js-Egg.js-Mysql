const Service = require('egg').Service
class Article extends Service {
    async getArticleType() {
        const statement = `
        SELECT type.type_name name, type.type_order torder FROM	blog_type type
        `
        const result = await this.app.mysql.query(statement)
        return result
    }
    //添加文章
    async addArticle(dataProps) {
        const { auth_id, type_id, title, content, introduce, addTime, view_count } = dataProps
        const statement = `
        INSERT INTO blog_article
           (article_author_id,
            article_type_id,
            article_title,
            article_content,
            article_introduce,
            article_addTime,
            article_view_count)
        VALUES
        (?,?,?,?,?,?,?)
        `
        const result = await this.app.mysql.query(statement, [auth_id, type_id, title, content, introduce, addTime, view_count])
        return result
    }
    //修改文章
    async updateArticle(dataProps, id) {
        const { type_id, title, content, introduce, addTime, articleId } = dataProps
        const statement = `
        UPDATE blog_article 
        SET article_type_id =?,
        article_title=?,
        article_content=?,
        article_introduce=?,
        article_addTime=?
         WHERE blog_article.id = ?
        `
        const result = await this.app.mysql.query(statement, [type_id, title, content, introduce, addTime, articleId])
        return result
    }
    //获取文章列表
    async getArticleList(userId) {
        console.log(userId);
        const statement = `
        SELECT  
        art.id    		                        Id,
        btype.type_name 						typename,
        art.article_title     					title,
        art.article_introduce 					introduce,
        FROM_UNIXTIME(art.article_addTime,'%Y-%m-%d' )    addTime
        FROM blog_article art 
        LEFT JOIN blog_type btype ON article_type_id = btype.id
        WHERE article_author_id = ?
        `
        const result = await this.app.mysql.query(statement, [userId])
        return result
    }
}

module.exports = Article
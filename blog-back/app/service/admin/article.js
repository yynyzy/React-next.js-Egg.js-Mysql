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
    //添加文章后直接修改当前文章
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
    //根据登录用户的 ID 他的获取文章列表
    async getArticleList(userId) {
        const statement = `
        SELECT  
        art.id    		                        Id,
        art.article_type_id                     typeId,
        btype.type_name 						typename,
        art.article_title     					title,
        art.article_introduce 					introduce,
        FROM_UNIXTIME(art.article_addTime,'%Y-%m-%d' )    addTime,
        art.article_view_count                  view_count
        FROM blog_article art 
        LEFT JOIN blog_type btype ON article_type_id = btype.id
        WHERE article_author_id = ?
        `
        const result = await this.app.mysql.query(statement, [userId])
        return result
    }
    //删除文章
    async delArticle(articleId) {
        const statement = `
        DELETE FROM blog_article WHERE id = ?;
        `
        const result = await this.app.mysql.query(statement, [articleId])
        return result
    }
    //根据list中的文章修改指定Id的文章
    async getArticleByIdToUpdate(articleId) {
        const statement = `
        SELECT  
        article_content 					content
        FROM blog_article
        WHERE blog_article.id = ?
        `
        const result = await this.app.mysql.query(statement, [articleId])
        return result
    }
}

module.exports = Article
module.exports = app => {
    const { router, controller, middleware } = app
    const vertifyAuth = middleware.vertifyAuth();
    //获取文章分类
    router.get('/admin/articleType', vertifyAuth, controller.admin.article.getArticleType)
    //添加文章
    router.post('/admin/addArticle', vertifyAuth, controller.admin.article.addArticle)
    //更新文章
    router.post('/admin/updateArticle', vertifyAuth, controller.admin.article.updateArticle)
    //获取文章列表
    router.get('/admin/getArticleList', vertifyAuth, controller.admin.article.getArticleList)
}
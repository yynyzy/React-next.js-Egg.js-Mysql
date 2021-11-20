module.exports = app => {
    const { router, controller, middleware } = app
    const vertifyAuth = middleware.vertifyAuth();
    router.get('/admin/articleType', vertifyAuth, controller.admin.article.getArticleType)
    router.post('/admin/addArticle', vertifyAuth, controller.admin.article.addArticle)
    router.post('/admin/updateArticle', vertifyAuth, controller.admin.article.updateArticle)
}
module.exports = app => {
    const { router, controller, middleware } = app
    const vertifyAuth = middleware.vertifyAuth();
    router.get('/admin/articleType', vertifyAuth, controller.admin.article.getArticleType)

}
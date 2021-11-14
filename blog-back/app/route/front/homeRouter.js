
module.exports = (app) => {
    const { router, controller } = app;
    const CFront = controller.front.home
    router.get('/front/ArticleLists', CFront.getArticleList)
    router.get('/front/ArticleList/:id', CFront.getArticleById)
}
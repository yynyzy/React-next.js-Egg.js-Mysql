
module.exports = (app) => {
    const { router, controller } = app;
    const CFH = controller.front.home
    router.get('/front/ArticleLists', CFH.getArticleList)
    router.get('/front/ArticleList/:id', CFH.getArticleById)
    router.get('/front/HeaderBarType', CFH.getHeaderBarType)
}

module.exports = (app) => {
    const { router, controller } = app;
    const CFront = controller.front.home
    router.get('/front/getArticleList', CFront.getArticleList)
}
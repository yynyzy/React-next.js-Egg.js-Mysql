
module.exports = (app) => {
    const { router, controller } = app;
    const CFront = controller.front.home
    router.get('/front/home', CFront.getArticleList)
}
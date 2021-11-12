
module.exports = (app) => {
    const { router, controller } = app;
    router.get('/front/home', controller.front.home.index)
}
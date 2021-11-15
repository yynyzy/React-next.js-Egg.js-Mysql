module.exports = (app) => {
    const { router, controller } = app;
    const CFront = controller.front.list
    router.get('/front/List/:id', CFront.getListById)
}
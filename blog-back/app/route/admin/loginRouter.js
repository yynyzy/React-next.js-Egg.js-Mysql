module.exports = (app) => {
    const { router, controller } = app;
    const vertifyUser = app.middleware.vertifyUser();
    router.post('/admin/register', vertifyUser, controller.admin.login.createUser)
    router.post('/admin/login', controller.admin.login.login)
}
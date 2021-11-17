module.exports = (app) => {
    const { router, controller } = app;
    const vertifyUser = app.middleware.vertifyUser();
    const passwordHandle = app.middleware.passwordHandle();
    router.post('/admin/register', vertifyUser, passwordHandle, controller.admin.login.createUser)
    router.post('/admin/login', controller.admin.login.login)
}
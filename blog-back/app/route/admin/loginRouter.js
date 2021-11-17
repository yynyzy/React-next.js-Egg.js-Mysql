module.exports = (app) => {
    const { router, controller } = app;
    router.post('/admin/register', controller.admin.login.createUser)
    router.post('/admin/login', controller.admin.login.login)
}
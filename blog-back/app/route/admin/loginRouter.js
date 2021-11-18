module.exports = (app) => {
    const { router, controller } = app;
    const vertifyUser = app.middleware.vertifyUser(); //注册功能的中间件（检查）
    const passwordHandle = app.middleware.passwordHandle();//注册功能的中间件（MD5加密）
    const vertifyAuth = app.middleware.vertifyAuth();//登录功能的中间件（检查）
    router.post('/admin/register', vertifyUser, passwordHandle, controller.admin.login.createUser)
    router.post('/admin/login', vertifyAuth, controller.admin.login.login)
}
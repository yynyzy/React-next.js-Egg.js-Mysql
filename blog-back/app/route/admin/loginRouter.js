module.exports = (app) => {
    const { router, controller } = app;
    const vertifyUser = app.middleware.vertifyUser(); //注册功能的中间件（检查）
    const passwordHandle = app.middleware.passwordHandle();//注册功能的中间件（MD5加密）
    const vertifyLogin = app.middleware.vertifyLogin();//登录功能的中间件（检查）
    router.post('/admin/register', vertifyUser, passwordHandle, controller.admin.login.createUser)
    router.post('/admin/login', vertifyLogin, controller.admin.login.login)
}
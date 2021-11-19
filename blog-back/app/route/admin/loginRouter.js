module.exports = (app) => {
    const { router, controller, middleware } = app;
    const vertifyUser = middleware.vertifyUser(); //注册功能的中间件（检查）
    const passwordHandle = middleware.passwordHandle();//注册功能的中间件（MD5加密）
    const vertifyLogin = middleware.vertifyLogin();//登录功能的中间件（检查）
    const vertifyAuth = middleware.vertifyAuth();//验证用户登录是否合法的中间件（验证）
    router.post('/admin/register', vertifyUser, passwordHandle, controller.admin.login.createUser)
    router.post('/admin/login', vertifyLogin, controller.admin.login.login)
    router.get('/admin/test', vertifyAuth, controller.admin.login.sucess)//这个是测试用户登录token授权了吗
}
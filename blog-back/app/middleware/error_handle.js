const errorTypes = require("../constants/errorType")

module.exports = (option, app) => {
    return async function errorHandler(ctx, next) {


        let status, message
        switch (err.message) {
            case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
                status = 400 //bad request
                message = "用户名和密码不能为空！"
                break;
            case errorTypes.USER_ALREADY_EXISTS:
                status = 409 //conflict
                message = "用户已经存在！"
                break;
            case errorTypes.USER_DOES_NOT_EXISTS:
                status = 400 //conflict
                message = "用户不存在！"
                break;
            case errorTypes.PASSWORD_IS_INCORRECT:
                status = 400 //conflict
                message = "你输入的密码不正确！"
                break;
            case errorTypes.UNAUTHORIZED:
                status = 401
                message = "失效的token！"
                break;
            case errorTypes.UNPERMISSION:
                status = 401
                message = "用户没有操作的权限！"
                break;
            default:
                status = 404
                message = "NOT_FOUND"
        }
        if (ctx.status === 404 && !ctx.body) {
            if (ctx.acceptJSON) {
                ctx.body = { error: 'Not Found' };
            } else {
                ctx.body = '<h1>Page Not Found</h1>';
            }
        }
        ctx.status = status
        ctx.body = message
        await next();


    }

}
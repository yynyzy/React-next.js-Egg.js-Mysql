/*
*   用于在插入数据库前检查 用户的 账号和密码是否符合条件
*/
const errType = require("../constants/errorType")
const errorHandler = require("../utils/errorHandle")



module.exports = (options, app) => {
    //判断注册是否符合规范
    return async function vertifyUser(ctx, next) {
        const { username, password } = ctx.request.body;
        //判断 是否为空
        if (!username || !password) {
            const error = errType.NAME_OR_PASSWORD_IS_REQUIRED
            const { status, message } = errorHandler(error)
            ctx.status = status
            return ctx.body = message
        }

        // 判断是否有相同的名字，有就无法注册
        const result = await ctx.service.admin.login.getUserByName(username)
        if (result.length) {
            const error = errType.USER_ALREADY_EXISTS
            const { status, message } = errorHandler(error)
            console.log(status);
            ctx.status = status
            return ctx.body = message
        }
        await next()
    }
};

/**
 *  判断登录账户是否合法
 */
const errorTypes = require('../constants/errorType')

module.exports = (options, app) => {
    return async function vertifyAuth(ctx, next) {
        const { username, password } = ctx.request.body;
        //1.判断 是否为空
        if (!username || !password) {
            const error = errorTypes.NAME_OR_PASSWORD_IS_REQUIRED
            return ctx.helper.fail(error)
        }
        //2.判断用户是否存在
        const result = await ctx.service.admin.login.getUserByName(username)
        //取result数组中的第一个是否存在，不存在表示数据库中没有这个用户
        const user = result[0]
        if (!user) {
            const error = errorTypes.USER_DOES_NOT_EXISTS
            return ctx.helper.fail(error)
        }
        // 3.检查密码是否错误，使用加密后的hash值进行比对
        const _password = ctx.helper.MD5password(password)
        if (_password !== user.password) {
            const error = errorTypes.PASSWORD_IS_INCORRECT
            return ctx.helper.fail(error)
        }
        ctx.user = user
        await next()
    }
}
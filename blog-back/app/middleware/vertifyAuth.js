/**
 *  //验证用户是否授权(Token)
 */
const errorTypes = require("../constants/errorType")

module.exports = options => {
    //判断注册是否符合规范
    return async function vertifyAuth(ctx, next) {
        //1.获取 token
        const authorization = ctx.headers.authorization
        console.log(authorization);
        if (!authorization) {
            const error = errorTypes.UNAUTHORIZED
            return ctx.helper.fail(error);
        }

        const token = authorization.replace("Bearer ", "")
        //2.验证token
        try {
            const result = await ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
            //将 token 解析出的用户信息保存到ctx中，供下一个中间件使用 
            ctx.user = result
            await next()
        } catch (err) {
            console.log(err);
            const error = errorTypes.UNAUTHORIZED
            return ctx.helper.fail(error);
        }
    }
}


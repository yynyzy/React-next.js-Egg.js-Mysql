/**
 *  对要存入数据库的密码进行加密
 */

module.exports = (options) => {
    return async function passwordHandle(ctx, next) {
        let { password } = ctx.request.body;
        ctx.request.body.password = ctx.helper.MD5password(password);
        await next()
    }
}
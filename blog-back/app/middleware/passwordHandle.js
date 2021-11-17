/**
 *  对要存入数据库的密码进行加密
 */
const MD5password = require("../utils/MD5")

module.exports = (options) => {
    return async function passwordHandle(ctx, next) {
        let { password } = ctx.request.body;
        ctx.request.body.password = MD5password(password);
        await next()
    }
}
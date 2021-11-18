/*
*   用于在插入数据库前检查 用户的 账号和密码是否符合条件
*/
const errType = require("../../constants/errorType")
// const service = require("../service/user.service")
const MD5password = require("../../utils/MD5")


module.exports = (options, app) => {
    //判断注册是否符合规范
    return async function vertifyUser(ctx, next) {
        //1.获取 user，password
        const { username, password } = ctx.request.body;
        console.log(username, password);
        //2.判断 是否为空
        if (!username || !password) {
            const error = new Error(errType.NAME_OR_PASSWORD_IS_REQUIRED)
            console.log(error);
            ctx.body = error
            // return ctx.app.emit('error', error, ctx)
        }
        //判断是否有相同的名字，有就无法注册
        const result = await service.getUserByName(username)
        if (result.length) {
            const error = new Error(errType.USER_ALREADY_EXISTS)
            console.log(error);
            ctx.body = error
            // return ctx.app.emit('error', error, ctx)
        }
        await next()
    }
};

const crypto = require('crypto');
const errorTypes = require('../constants/errorType')

module.exports = {
    getToken(options) {
        return this.app.jwt.sign(options, this.app.config.jwt.secret);
    },
    //密码MD5加密
    MD5password(password) {
        const MD5 = crypto.createHash('md5');
        //注意用户输入的密码必须以字符串的格式传回到这里，否则报错
        const result = MD5.update(password).digest("hex")
        return result
    },
    //控制报错
    fail(error) {
        let status, message
        switch (error) {
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
        this.ctx.status = status
        this.ctx.body = message
    }
};
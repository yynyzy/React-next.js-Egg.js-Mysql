const Controller = require('egg').Controller

class Login extends Controller {
    async createUser() {
        const { ctx, service } = this
        const registerUser = ctx.request.body
        const result = ctx.service.admin.login.createUser(registerUser)
        ctx.body = {
            data: "用户注册成功"
        }
    }
    async login() {
        const { ctx } = this
        ctx.body = "登录"
    }
}

module.exports = Login
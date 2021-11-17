const Controller = require('egg').Controller

class Login extends Controller {
    async createUser() {
        const { ctx } = this
        const registerUser = ctx.request.body
        console.log(registerUser);
        const result = ctx.service.admin.login.createUser(registerUser)
        ctx.body = {
            data: "注册成功"
        }
    }
    async login() {
        const { ctx } = this
        ctx.body = "登录"
    }
}

module.exports = Login
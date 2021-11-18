const Controller = require('egg').Controller
// const jwt = require('egg-jwt')

class Login extends Controller {
    //创建用户
    async createUser() {
        const { ctx, service } = this
        const registerUser = ctx.request.body
        const result = await service.admin.login.createUser(registerUser)
        ctx.body = {
            data: "用户注册成功",
        }
    }
    async login() {
        const { ctx } = this
        //将用户的 id和 账户作为 jwt的 sign
        const { username, password } = ctx.user
        const token = await ctx.helper.getToken({ username, password })

        ctx.body = {
            username, token
        }
    }
}

module.exports = Login
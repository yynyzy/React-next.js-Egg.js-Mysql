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
        const { id, username } = ctx.user
        const token = await ctx.helper.getToken({ id, username })
        ctx.body = {
            username, token, code: '0'
        }
    }
    async sucess() {
        const { ctx } = this
        const { user } = ctx
        ctx.status = 200
        ctx.body = {
            user,
            message: "用户授权成功"
        }
    }
}

module.exports = Login
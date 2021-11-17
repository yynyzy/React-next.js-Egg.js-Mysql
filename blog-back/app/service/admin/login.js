const Service = require('egg').Service

class LoginService extends Service {
    async createUser(registerUser) {
        const { username, password } = registerUser
        console.log(username, password);
        const statement = ``
        const res = await this.app.mysql.query(statement, [username, password])
        return res
    }
}
module.exports = LoginService
const Service = require('egg').Service

class LoginService extends Service {
    //创建用户
    async createUser(registerUser) {
        const { username, password } = registerUser;
        const statement = `
        INSERT INTO blog_user(username,password) VALUES(?,?);
        `
        const result = await this.app.mysql.query(statement, [username, password])
        return result
    }
    //查询是否有这个用户
    async getUserByName(username) {
        const statement = `SELECT * FROM blog_user WHERE username = ?;`
        const result = await this.app.mysql.query(statement, [username])
        return result
    }
}
module.exports = LoginService
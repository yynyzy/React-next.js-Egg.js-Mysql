const Service = require('egg').Service

class LoginService extends Service {
    //创建用户
    async createUser(registerUser) {
        const { username, password } = registerUser
        console.log('sql', username, password);
        const statement = `
        INSERT INTO blog_user(username,password) VALUES(?,?);
        `
        const result = await this.app.mysql.query(statement, [username, password])
        console.log(result);
        return res
    }
    //查询是否有这个用户
    async getUserByName(username) {
        const statement = `SELECT * FROM blog_user WHERE username = ?;`
        const result = await this.app.mysql.query(statement, [username])
        console.log('sql', result);
        return result
    }
}
module.exports = LoginService
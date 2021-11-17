/**
 *  用于统一管理 router 的注册引用。
 */
const fs = require('fs');

module.exports = (app) => {
  fs.readdirSync(__dirname + '/route/admin').forEach(file => {
    require(`./route/admin/${file}`)(app)
  })
  fs.readdirSync(__dirname + '/route/front').forEach(file => {
    require(`./route/front/${file}`)(app)
  })

}

// module.exports = app => {
//   fs.readdirSync(__dirname + '/route/front').forEach(file => {
//     console.log(file);
//     require(`./route/front/${file}`)(app)
//   })
// }

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_1636706309676_2238';

  config.middleware = [];

  config.cors = {
    origin: '*', // 表示允许的源
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH' // 表示允许的http请求方式
  }

  //连接数据库的配置
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'yyn990902',
      // database
      database: 'react_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

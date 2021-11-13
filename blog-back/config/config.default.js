module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_1636706309676_2238';

  config.middleware = [];

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['http://127.0.0.1:3001', 'http://127.0.0.1:3000', 'http://127.0.0.1:7001']
  }

  config.cors = {
    // origin: ctx => ctx.get('origin'),
    credentials: true,  //允许Cook可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

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

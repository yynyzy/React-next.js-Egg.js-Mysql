module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1636706309676_2238';

  config.middleware = [];

  //解决跨域
  config.security = {
    csrf: false,
    scrf: {
      enable: false
    },
    domainWhitelist: ['*']
  }
  config.cors = {
    origin: '*', // 表示允许的源
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH' // 表示允许的http请求方式
  }
  config.jwt = {
    secret: 'yanyinuo',	//自定义token的加密条件字符串，可按各自的需求填写
  };
  //连接数据库的配置(mysql新版本的密码采用算法不同会连接不上需要降级)
  config.mysql = {
    // database configuration
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'yyn990902',
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

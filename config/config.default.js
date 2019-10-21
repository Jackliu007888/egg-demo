const path = require('path')

module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1513779989145_1674'
  config.logger = {
    outputJSON: true,
    level: 'NONE',
  }
  // add your config here
  // 加载 errorHandler 中间件
  config.middleware = [ 'errorHandler' ]

  // 只对 /api 前缀的 url 路径生效
  // config.errorHandler = {
  //   match: '/api',
  // }

  config.security = {
    // csrf: {
    //   enable: false,
    // },
    csrf: false,
    origin: () => '*',
    domainWhiteList: [
      'http://localhost:8002',
      'http://localhost:8071',
      'http://localhost:8080', 
      'http://localhost:8081', 
      'http://localhost:3000', 
    ],
  }
  
  config.multipart = {
    fileExtensions: [
      '.apk', 
      '.pptx', 
      '.xls', 
      '.xlsx', 
      '.docx', 
      '.csv', 
      '.doc', 
      '.ppt', 
      '.pdf', 
      '.pages', 
      '.wav', 
      '.mov',
      '.map'
    ], // 增加对 .apk 扩展名的支持
  },


  // config.mongoose = {
  //   clients: {
  //     db1: {
  //       url: 'mongodb://localhost:27019/test',
  //       options: {
  //         useMongoClient: true,
  //         autoReconnect: true,
  //         reconnectTries: Number.MAX_VALUE,
  //         bufferMaxEntries: 0,
  //       },
  //     },
  //   },
  // }


  // config.jwt = {
  //   secret: 'Great4-M',
  //   enable: true, // default is false
  //   match: '/jwt', // optional
  // }
  
  config.static = {
    // maxAge: 31536000,
    prefix: '/',
    dir: [path.join(appInfo.baseDir, 'app/view'), path.join(appInfo.baseDir, 'app/public')]
  }

  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view')
    ].join(','),
    defaultViewEngine: 'nunjucks',
  }

  config.proxy = true


  return config
}

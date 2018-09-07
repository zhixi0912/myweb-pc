dev: {
  env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
    '/api/v1/**': {
      target: 'https://cnodejs.org', // 你接口的域名
        secure: false,
        changeOrigin: false,
    }
  },
  cssSourceMap: false
}

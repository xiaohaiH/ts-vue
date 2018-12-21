const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  outputDir: '../../dist/xf_pcDist/dist',
  // 配置低版本兼容 -> 对 node-modules 里的文件进行 es5 转义
  transpileDependencies: [
    'vue-echarts',
    'resize-detector',
  ],
  chainWebpack (config) {
    // 配置别名
    config.resolve.alias
      .set('~assets', resolve('src/assets'))
      .set('~store', resolve('src/store'))
      .set('~components', resolve('src/components'))
      .set('~views', resolve('src/views'))
      .set('~libs', resolve('src/libs'))
      .set('~config', resolve('src/config'))
      .set('~mixins', resolve('src/mixins'))
      .set('~directives', resolve('src/directives'))
      .set('~utils', resolve('src/utils'));
    config
      .plugin('html')
      .tap(args => {
        args[0].chunksSortMode = 'none';
        return args;
      });
    // config.module.rules.push({
    //   enforce: 'pre',
    //   test: /\.(js|vue|ts)$/,
    //   loader: 'eslint-loader',
    //   exclude: /(node_modules)/,
    //   options: {
    //     fix: true,
    //   },
    // });
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       // 配置全局 scss 变量
  //       data: `@import "~@/assets/scss/variable.scss";`,
  //     },
  //   },
  // },
  // 配置代理服务器
  devServer: {
    // 本地环境 -> 叶一玲
    // proxy: 'http://192.168.4.42:9501',
    // 本地环境 -> 周忠
    // proxy: 'http://192.168.4.96:9501',
    // 本地环境 -> 陈哥
    proxy: 'http://192.168.4.132',
    // 正式环境 -> 消防
    // proxy: 'http://city.msu7.net/apis',
    // 正式环境 -> 威盛
    // proxy: 'http://wasion.msu7.net/apis',
    // 正式环境 -> 城西
    // proxy: 'http://cxcity.msu7.net/apis',
    // 正式环境 -> 烟台
    // proxy: 'http://yantai.msu7.net/apis',
    // 测试环境
    // proxy: 'http://119.29.14.91/apis',
    // 线上环境
    // proxy: 'http://fire.msu7.net/apis',
    // 安监环境
    // proxy: 'http://safety.msu7.net/apis',
    // 环保环境
    // proxy: 'http://envir.msu7.net/apis',
    // 允许通过本地域名访问
    disableHostCheck: true,
    // eslint 报错时在终端提示, 但不使编译失败
    overlay: {
      warnings: true,
      errors: false,
    },
  },
  // 不开启 eslint 模式
  lintOnSave: true,
};
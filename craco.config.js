
const CracoLessPlugin = require('craco-less');
module.exports = {
  // 添加对less的处理配置
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 添加全局less变量
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
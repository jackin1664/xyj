'use strict'
module.exports = {
    publicPath: '/',
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: true,
    devServer: {
        proxy: {  //配置跨域
            '/api': {
                // target: 'http://192.168.0.19:8096/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                target: 'http://api.tmk.finance/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,  //允许跨域
                pathRewrite: {
                    '^/api': 'api'  //请求的时候使用这个api就可以
                }
            }
        }
    },
};

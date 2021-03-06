/*
 * @Author: hhhhhq
 * @Date: 2021-01-09 21:01:01
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-25 16:33:13
 * @Description: file content
 */
module.exports = {
  lintOnSave: false,
  publicPath: "/blason-capelviel/",
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "伽贝徽章"
      return args
    })
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/pdf/[name].[hash:8].[ext]",
      })
  },
}

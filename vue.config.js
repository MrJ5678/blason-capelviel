/*
 * @Author: hhhhhq
 * @Date: 2021-01-09 21:01:01
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-19 12:53:57
 * @Description: file content
 */
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "伽贝徽章"
      return args
    })
  },
}

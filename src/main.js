/*
 * @Author: hhhhhq
 * @Date: 2021-01-09 15:39:30
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-10 11:01:01
 * @Description: file content
 */
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import "./assets/css/style.css"

createApp(App)
  .use(router)
  .mount("#app")

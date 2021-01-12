/*
 * @Author: hhhhhq
 * @Date: 2021-01-09 15:39:30
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-11 10:30:44
 * @Description: file content
 */
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { FontAwesomeIcon } from "@/plugins/font-awesome"

import "./assets/css/style.css"

createApp(App)
  .use(router)
  .component("fa", FontAwesomeIcon)
  .mount("#app")

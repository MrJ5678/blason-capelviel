/*
 * @Author: hhhhhq
 * @Date: 2021-01-09 15:39:30
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-23 15:39:49
 * @Description: file content
 */
import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Production from "../views/Production"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/production/:productionId",
    name: "Production",
    component: Production,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.fullPath.includes("#")) next("/")
  else next()
})

export default router

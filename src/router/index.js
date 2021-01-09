/*
 * @Author: hhhhhq
 * @Date: 2021-01-09 15:39:30
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-09 20:39:05
 * @Description: file content
 */
import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Productions from "../components/Productions"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/productions",
    name: "Productions",
    component: Productions,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

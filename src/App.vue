<!--
 * @Author: hhhhhq
 * @Date: 2021-01-09 15:39:30
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-24 22:51:47
 * @Description: file content
-->
<template>
  <div id="main">
    <Header></Header>
    <router-view :key="$route.fullPath"></router-view>
    <Footer></Footer>
    <scroll-top></scroll-top>
  </div>
</template>
<script>
import {
  showMenu,
  linkAction,
  scrollActive,
  scrollHeader,
  funScrollTop,
} from "./utils/util"
import ScrollTop from "./components/ScrollTop.vue"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: "App",
  components: {
    ScrollTop,
    Header,
    Footer,
  },
  mounted() {
    showMenu("nav-toggle", "nav-menu")
    this.addClickListenerToNavLink()
    window.onload = () => {
      this.addScrollActiveListener()
    }
    this.addScrollHeaderListener()
    this.addFunScrollTopListener()

    window.onresize = () => {
      this.screenWidth = document.body.clientWidth
    }
  },
  methods: {
    addClickListenerToNavLink() {
      const navLink = document.querySelectorAll(".nav__link")
      navLink.forEach(n => n.addEventListener("click", linkAction))
    },
    addScrollActiveListener() {
      const sections = document.querySelectorAll("section[id]")
      window.addEventListener("scroll", () => {
        scrollActive(sections)
      })
    },
    addScrollHeaderListener() {
      const header = document.getElementById("header")

      window.addEventListener("scroll", () => {
        scrollHeader(header)
      })
    },
    addFunScrollTopListener() {
      const scrollTop = document.getElementById("scroll-top")

      window.addEventListener("scroll", () => {
        funScrollTop(scrollTop)
      })
    },
  },
}
</script>
<style lang="scss"></style>

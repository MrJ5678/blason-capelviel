<!--
 * @Author: hhhhhq
 * @Date: 2021-01-09 15:39:30
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-24 09:05:25
 * @Description: file content
-->
<template>
  <div id="main">
    <Header></Header>
    <router-view :key="$route.fullPath"></router-view>
    <Footer></Footer>
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
    Header,
    Footer,
  },
  mounted() {
    showMenu("nav-toggle", "nav-menu")
  },
}
</script>
<style lang="scss"></style>

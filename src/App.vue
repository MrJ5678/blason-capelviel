<!--
 * @Author: hhhhhq
 * @Date: 2021-01-09 15:39:30
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-23 14:31:30
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
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
}
</script>
<style lang="scss"></style>

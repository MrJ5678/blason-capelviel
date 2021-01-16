<!--
 * @Author: hhhhhq
 * @Date: 2021-01-09 20:37:42
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-16 11:38:32
 * @Description: file content
-->
<template>
  <first-screen></first-screen>
  <about></about>
  <services></services>
  <productions-view></productions-view>
  <scroll-top></scroll-top>
</template>

<script>
import ScrollTop from "../components/ScrollTop.vue"
import FirstScreen from "../components/FirstScreen.vue"
import About from "../components/About.vue"
import Services from "../components/Services.vue"
import ProductionsView from "../components/ProductionsView.vue"

import {
  showMenu,
  linkAction,
  scrollActive,
  scrollHeader,
  funScrollTop,
} from "../utils/util"

export default {
  name: "Home",
  components: { FirstScreen, About, ScrollTop, Services, ProductionsView },
  mounted() {
    showMenu("nav-toggle", "nav-menu")
    this.addClickListenerToNavLink()

    const sections = document.querySelectorAll("section[id]")
    console.log(sections)

    window.addEventListener("scroll", () => {
      scrollActive(sections)
    })

    const header = document.getElementById("header")

    window.addEventListener("scroll", () => {
      scrollHeader(header)
    })

    const scrollTop = document.getElementById("scroll-top")

    window.addEventListener("scroll", () => {
      funScrollTop(scrollTop)
    })
  },

  methods: {
    addClickListenerToNavLink() {
      const navLink = document.querySelectorAll(".nav__link")
      navLink.forEach(n => n.addEventListener("click", linkAction))
    },
  },
}
</script>

<style></style>

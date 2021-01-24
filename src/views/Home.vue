<!--
 * @Author: hhhhhq
 * @Date: 2021-01-09 20:37:42
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-24 00:30:24
 * @Description: file content
-->
<template>
  <first-screen></first-screen>
  <about></about>
  <services></services>
  <productions-view :perViewNumber="perViewNumber"></productions-view>
  <scroll-top></scroll-top>
  <contact-me></contact-me>
</template>

<script>
import ScrollTop from "../components/ScrollTop.vue"
import FirstScreen from "../components/FirstScreen.vue"
import About from "../components/About.vue"
import Services from "../components/Services.vue"
import ProductionsView from "../components/ProductionsView.vue"
import ContactMe from "../components/ContactMe.vue"

import {
  showMenu,
  linkAction,
  scrollActive,
  scrollHeader,
  funScrollTop,
} from "../utils/util"

export default {
  name: "Home",
  components: {
    FirstScreen,
    About,
    ScrollTop,
    Services,
    ProductionsView,
    ContactMe,
  },
  data() {
    return {
      slidePerView: 0,
      screenWidth: document.body.clientWidth,
    }
  },
  computed: {
    perViewNumber() {
      if (this.screenWidth <= 576) {
        return this.slidePerView + 1
      } else if (this.screenWidth <= 769 && this.screenWidth > 576) {
        return this.slidePerView + 2
      } else {
        return this.slidePerView + 3
      }
    },
  },
  mounted() {
    console.log("mounted")
    showMenu("nav-toggle", "nav-menu")
    this.addClickListenerToNavLink()
    this.addScrollActiveListener()
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

<style></style>

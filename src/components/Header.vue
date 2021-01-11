<!--
 * @Author: hhhhhq
 * @Date: 2021-01-09 16:27:19
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-10 21:29:22
 * @Description: file content
-->
<template>
  <!-- scroll-top -->
  <a href="javascript: void(0)" class="scolltop" id="scroll-top">
    <i class="bx bxs-chevron-up scolltop__icon"></i>
  </a>
  <!-- header -->
  <header class="l-header" id="header">
    <nav class="nav bd-container">
      <router-link to="/" class="nav__logo">伽贝徽章</router-link>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link active-link">主页</a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">关于 · 伽贝徽章</a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link">服务</a>
          </li>
          <li class="nav__item">
            <a href="#portfolio" class="nav__link">伽贝徽章系列</a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link">联系我们</a>
          </li>
        </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle">
        <i class="bx bx-menu"></i>
      </div>
    </nav>
  </header>
</template>

<script>
import { showMenu, linkAction, scrollActive, scrollHeader } from "../utils/util"

export default {
  name: "Header",
  mounted() {
    showMenu("nav-toggle", "nav-menu")
    this.addClickListenerToNavLink()

    const sections = document.querySelectorAll("sections[id]")

    window.addEventListener("scroll", () => {
      scrollActive(sections)
    })

    const header = document.getElementById("header")

    window.addEventListener("scroll", () => {
      scrollHeader(header)
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

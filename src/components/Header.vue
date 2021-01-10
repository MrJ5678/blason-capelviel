<!--
 * @Author: hhhhhq
 * @Date: 2021-01-09 16:27:19
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-10 16:22:44
 * @Description: file content
-->
<template>
  <header class="l-header" id="header">
    <nav class="nav bd-container">
      <router-link to="/" class="nav__logo">伽贝徽章</router-link>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link active-link">Home</a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">About</a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link">Services</a>
          </li>
          <li class="nav__item">
            <a href="#portfolio" class="nav__link">Portfolio</a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link">Contact</a>
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
import { showMenu, linkAction, scrollActive } from "../utils/util"

export default {
  name: "Header",
  mounted() {
    showMenu("nav-toggle", "nav-menu")
    this.addClickListenerToNavLink()

    const sections = document.querySelectorAll("sections[id]")

    window.addEventListener("scroll", () => {
      scrollActive(sections)
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

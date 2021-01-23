<!--
 * @Author: hhhhhq
 * @Date: 2021-01-09 16:27:19
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-23 01:09:30
 * @Description: file content
-->
<template>
  <!-- Header -->
  <header class="l-header" id="header">
    <nav class="nav bd-container">
      <router-link to="/" class="nav__logo">伽贝徽章</router-link>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link">主页</a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">关于 · 伽贝徽章</a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link">服务</a>
          </li>
          <li class="nav__item">
            <a href="#productionlist" class="nav__link">伽贝徽章系列</a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link">联系我们</a>
          </li>
        </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle">
        <fa icon="bars" type="fas" class="icon-toggle-menu"></fa>
      </div>
    </nav>
  </header>
</template>

<script>
import { gsap } from "gsap"

export default {
  name: "Header",
  mounted() {
    gsap.from(".nav__logo, .nav__toggle", {
      opacity: 0,
      duration: 2,
      delay: 1,
      y: 25,
      ease: "expo.out",
      stagger: 0.2,
    })

    gsap.from(".nav__item", {
      opacity: 0,
      duration: 2,
      delay: 1.8,
      y: 25,
      ease: "expo.out",
      stagger: 0.2,
    })
  },
}
</script>

<style>
.icon-toggle-menu {
  width: 1rem;
}
</style>

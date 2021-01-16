<!--
 * @Author: hhhhhq
 * @Date: 2021-01-14 13:43:52
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-15 07:47:07
 * @Description: file content
-->
<template>
  <main class="l-main">
    <!-- Home -->
    <section class="home" id="home">
      <div class="home__container bd-container bd-grid">
        <div class="home__data">
          <span class="home__greeting">Hello, 我是伽贝徽章</span>
          <h1 class="home__name">blason capelviel</h1>
          <span class="home__profession">法国原瓶进口红酒</span>
          <a href="#about" class="button button-light">了解更多</a>
        </div>

        <div class="home__social">
          <a class="home__social-icon">
            <fa icon="weixin" type="fab" class="icon-weixin"></fa>
          </a>
          <a href="tel:13136758989" class="home__social-icon">
            <fa icon="phone" type="fas" class="icon-phone"></fa>
          </a>
        </div>

        <div class="home__img">
          <img
            src="../assets/img/pexels-freestocksorg-312080.jpg"
            alt="背景图"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "FirstScreen",
}
</script>

<style>
.home__social {
  display: flex;
}

.icon-weixin,
.icon-phone {
  color: var(--first-color-lighten);
}

.icon-weixin:hover,
.icon-phone:hover {
  color: var(--first-color-light);
}

.icon-weixin {
  width: 1.6rem;
}

.icon-phone {
  position: relative;
  bottom: 2px;
  width: 1.4rem;
}
</style>

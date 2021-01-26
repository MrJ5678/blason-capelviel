<!--
 * @Author: hhhhhq
 * @Date: 2021-01-09 16:29:47
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-26 16:23:21
 * @Description: file content
-->
<template>
  <footer class="footer">
    <div class="footer__container bd-container">
      <h1 class="footer__title">伽贝徽章</h1>
      <p class="footer__description">欢迎阁下光临</p>

      <div class="footer__social">
        <span class="footer__link">
          <fa type="fab" icon="weixin" class="icon-social"></fa>
        </span>
        <a href="tel:13136758989" class="footer__link">
          <fa type="fas" icon="phone" class="icon-social"></fa>
        </a>
      </div>
      <p class="footer__copy">&#169; 2021 All right reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style>
.icon-social {
  width: 1rem;
}
</style>

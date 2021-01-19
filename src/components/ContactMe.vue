<!--
 * @Author: hhhhhq
 * @Date: 2021-01-17 11:28:38
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-18 17:04:57
 * @Description: file content
-->
<template>
  <section class="contact section bd-container" id="contact">
    <span class="section-subtitle">阁下咨询</span>
    <h2 class="section-title">联系我们</h2>

    <div class="contact__container bd-grid">
      <div class="contact__content bd-grid">
        <div class="contact__box">
          <fa type="fas" icon="phone" class="icon-contact"></fa>
          <h3 class="contact__title">联系电话</h3>
          <span class="contact__description">13136758989</span>
        </div>

        <div class="contact__box">
          <fa type="fas" icon="map-marker-alt" class="icon-contact"></fa>
          <h3 class="contact__title">位置</h3>
          <span class="contact__description">道里区爱建路28号</span>
        </div>

        <div class="contact__box">
          <fa type="fas" icon="comments" class="icon-contact"></fa>
          <h3 class="contact__title">微信</h3>
          <span class="contact__description">13136758989</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactMe",
}
</script>

<style>
#contact {
  padding-bottom: 6rem;
}
.icon-contact {
  width: 1rem;
}
</style>

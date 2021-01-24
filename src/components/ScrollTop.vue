<!--
 * @Author: hhhhhq
 * @Date: 2021-01-11 15:11:52
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-24 15:22:25
 * @Description: file content
-->
<template>
  <!-- scroll Top -->
  <a @click="scrollToTop" class="scrolltop" id="scroll-top">
    <fa icon="angle-up" type="fas" class="scrolltop__icon"></fa>
  </a>
</template>

<script>
export default {
  name: "ScrollTop",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style>
.scrolltop__icon {
  width: 1rem;
}
</style>

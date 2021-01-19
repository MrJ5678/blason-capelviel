<!--
 * @Author: hhhhhq
 * @Date: 2021-01-09 16:31:56
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-20 00:04:56
 * @Description: file content
-->
<template>
  <div
    class="productions__container bd-container"
    :style="{
      'margin-top': headerHeight + 'px',
      'min-height': containerHeight + 'px',
    }"
  >
    productions
  </div>
</template>

<script>
export default {
  name: "Productions",
  data() {
    return {
      headerHeight: 0,
      footerHeight: 0,
    }
  },
  mounted() {
    this.getHeaderHeight()
    this.getFooterHeight()
    window.onresize = () => {
      this.getHeaderHeight()
      this.getFooterHeight()
    }
  },
  computed: {
    containerHeight() {
      return (
        document.documentElement.clientHeight -
        this.headerHeight -
        this.footerHeight
      )
    },
  },
  methods: {
    getHeaderHeight() {
      var { height } = document.getElementById("header").getBoundingClientRect()
      this.headerHeight = height
    },
    getFooterHeight() {
      var { height } = document.querySelector("footer").getBoundingClientRect()
      this.footerHeight = height
    },
  },
}
</script>

<style></style>

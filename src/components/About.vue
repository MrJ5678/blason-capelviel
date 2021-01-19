<!--
 * @Author: hhhhhq
 * @Date: 2021-01-14 13:47:41
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-19 14:55:45
 * @Description: file content
-->
<template>
  <section class="about section bd-container" id="about">
    <span class="section-subtitle">探索</span>
    <h2 class="section-title">伽贝徽章</h2>

    <div class="about__container bd-grid">
      <div class="about__data bd-grid">
        <p class="about__description">
          <span>🇫🇷法国<br />伽贝徽章</span>
        </p>
        <div>
          <span class="about__number">2</span>
          <span class="about__achievement"
            >分别来自奥克产区(Pays d'Oc) 和 <br />埃罗产区(Pays d'Hérault)
            <b class="strong__number">2</b> 个产区</span
          >
        </div>
        <div>
          <span class="about__number"></span>
          <span class="about__achievement"></span>
        </div>
        <div>
          <span class="about__number">7</span>
          <span class="about__achievement"
            ><b class="strong__number">7</b> 款供您挑选</span
          >
        </div>
      </div>
      <img
        src="../assets/img/pexels-george-desipris-736188.jpg"
        alt="about__img"
        class="about__img"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
}
</script>

<style>
.strong__number {
  font-size: 1.2rem;
}
</style>

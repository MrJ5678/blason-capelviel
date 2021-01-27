<!--
 * @Author: hhhhhq
 * @Date: 2021-01-15 15:43:08
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-27 10:44:32
 * @Description: file content
-->
<template>
  <section class="services section bd-container overlay-dark" id="services">
    <span class="section-subtitle">省时省力!</span>
    <h2 class="section-title">市内免费送货</h2>

    <div class="services__container bd-grid">
      <div class="services__data">
        <fa icon="heart" type="fas" class="services__icon"></fa>
        <h3 class="services__title">品质</h3>
        <p class="services__description">
          专注做好进口优质葡萄酒, 满足顾客需求, 推广葡萄酒文化
        </p>
      </div>

      <div class="services__data">
        <fa
          icon="gem"
          type="fas"
          class="services__icon icon-phone"
          style="margin-bottom: 1.4rem;"
        ></fa>
        <h3 class="services__title">服务</h3>
        <p class="services__description">
          所有代理酒款均经过多次品试与参考国外重要媒体评比的严格筛选，以期提供客户最好及多样选择
        </p>
      </div>

      <div class="services__data">
        <fa icon="truck" type="fas" class="services__icon icon-truck"></fa>
        <h3 class="services__title">安全</h3>
        <p class="services__description">
          您无需为运输缺损担心,我们为您提供送达服务,市内当日送货上门,就是这么简单!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
}
</script>

<style>
.services__icon {
  width: 3rem;
}

.icon-phone {
  width: 2rem;
}

svg.icon-truck {
  margin-bottom: 26px;
}

.overlay-dark {
  position: relative;
  z-index: 1;
}

.overlay-dark:before {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: -1;
}

.services__icon {
  width: 4rem;
}
</style>

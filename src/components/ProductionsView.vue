<!--
 * @Author: hhhhhq
 * @Date: 2021-01-16 09:16:56
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-18 01:52:44
 * @Description: file content
-->
<template>
  <section class="productionlist section bd-container" id="productionlist">
    <span class="section-subtitle">伽贝徽章葡萄酒系列</span>
    <h2 class="section-title"></h2>

    <div class="productionlist__container">
      <swiper
        :slides-per-view="$props.perViewNumber"
        :space-between="16"
        parallax
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
      >
        <div class="slider-navigation">
          <div class="prevArrow icon-arrow">
            <fa type="fas" icon="chevron-left" class="icon-left-arrow"></fa>
          </div>
          <div class="nextArrow icon-arrow">
            <fa type="fas" icon="chevron-right" class="icon-right-arrow"></fa>
          </div>
        </div>
        <swiper-slide v-for="production in productionList" :key="production.id">
          <div class="productionlist__content">
            <a href="/">
              <img
                :src="production.imgUrl"
                :alt="production.imgAlt"
                class="productionlist__img"
              />
            </a>
            <div class="productionlist__data">
              <span class="productionlist__subtitle">
                {{ production.name }} {{ production.year }}
              </span>
              <a href="/">
                <h2 class="productionlist__title">
                  {{ production.award }}
                </h2>
              </a>
              <a href="/" class="button button-link">了解更多</a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Parallax,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"

import "swiper/swiper-bundle.min.css"
import "swiper/components/navigation/navigation.min.css"

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, Parallax])

export default {
  name: "Productionsview",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    perViewNumber: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      productionList: [
        {
          id: 1,
          name: "老藤佳丽酿干红",
          year: "2018",
          award: "2015.2016.2018年份荣获柏林世界葡萄酒大赛金奖",
          imgUrl: require("../assets/img/productionImg1.jpeg"),
          imgAlt: "老藤佳丽酿干红",
        },
        {
          id: 2,
          name: "赤霞珠干红",
          year: "2018",
          award: "2015.2016年份荣获柏林世界葡萄酒大赛金奖",
          imgUrl: require("../assets/img/productionImg2.jpeg"),
          imgAlt: "赤霞珠干红",
        },
        {
          id: 3,
          name: "赤霞珠干红",
          year: "2018",
          award: "2015.2016年份荣获柏林世界葡萄酒大赛金奖",
          imgUrl: require("../assets/img/productionImg2.jpeg"),
          imgAlt: "赤霞珠干红",
        },
        {
          id: 4,
          name: "赤霞珠干红",
          year: "2018",
          award: "2015.2016年份荣获柏林世界葡萄酒大赛金奖",
          imgUrl: require("../assets/img/productionImg2.jpeg"),
          imgAlt: "赤霞珠干红",
        },
      ],
    }
  },
}
</script>

<style>
.icon-arrow {
  width: 1rem;
  cursor: pointer;
  color: rgb(123, 111, 113, 0.5);
  transition: 0.3s;
}

.icon-arrow:hover {
  color: var(--first-color);
}

.swiper-container {
  position: relative;
}

.swiper-slide {
  height: 116%;
}
/* .swiper-pagination {
  position: absolute;
  bottom: 25px !important;
} */

.swiper-pagination-bullet-active {
  background-color: var(--first-color);
}

.slider-navigation {
  position: absolute;
  top: 40%;
  padding: 0 1rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 100;
}
</style>

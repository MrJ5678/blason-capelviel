<!--
 * @Author: hhhhhq
 * @Date: 2021-01-16 09:16:56
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-19 15:34:55
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
            <a href="/productions">
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
              <a href="/productions">
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
          imgUrl: require("../assets/img/laotengjialiniang.jpeg"),
          imgAlt: "老藤佳丽酿干红",
        },
        {
          id: 2,
          name: "梅洛-赤霞珠干红",
          year: "2018",
          award: "2018年荣获柏林世界葡萄酒大赛金奖 里昂世界葡萄酒大赛金奖",
          imgUrl: require("../assets/img/meiluochixiazhu.jpeg"),
          imgAlt: "梅洛-赤霞珠干红",
        },
        {
          id: 3,
          name: "GSM混酿葡萄酒",
          year: "2018",
          award: "",
          imgUrl: require("../assets/img/gsmhunniang.jpeg"),
          imgAlt: "GSM混酿葡萄酒",
        },
        {
          id: 4,
          name: "赤霞珠-西拉干红",
          year: "2018",
          award: "2018年荣获柏林世界葡萄酒大赛金奖 里昂世界葡萄酒大赛金奖",
          imgUrl: require("../assets/img/chixiazhuxila.jpeg"),
          imgAlt: "赤霞珠-西拉干红",
        },
        {
          id: 5,
          name: "赤霞珠干红",
          year: "2018",
          award: "2015.2016年荣获柏林世界葡萄酒大赛金奖",
          imgUrl: require("../assets/img/chixiazhu.jpeg"),
          imgAlt: "赤霞珠干红",
        },
        {
          id: 6,
          name: "西拉干红",
          year: "2018",
          award: "2015.2016年荣获柏林世界葡萄酒大赛金奖",
          imgUrl: require("../assets/img/xila.jpeg"),
          imgAlt: "西拉干红",
        },
        {
          id: 7,
          name: "霞多丽干白",
          year: "2018",
          award: "2016.2018年荣获柏林世界葡萄酒大赛金奖",
          imgUrl: require("../assets/img/xiaduoli.jpeg"),
          imgAlt: "霞多丽干白",
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

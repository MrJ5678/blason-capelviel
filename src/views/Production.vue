<!--
 * @Author: hhhhhq
 * @Date: 2021-01-20 19:46:39
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-24 17:11:08
 * @Description: file content
-->
<template>
  <section
    class="production section bd-container"
    :style="{
      'margin-top': headerHeight + 'px',
      'min-height': containerHeight + 'px',
    }"
  >
    <div class="production__container bd-grid">
      <div class="production__img">
        <img
          :src="currentProduction.imgUrl"
          :alt="currentProduction.imgAlt"
          style="box-shadow: 0 2px 43px -4px rgb(0 0 0 / 19%);"
        />
      </div>
      <div class="production__info">
        <h2 class="production__title">
          <div style="display: flex; justify-content: flex-start;">
            <span style="margin-right: 2rem;">{{
              currentProduction.name
            }}</span>
            <div
              v-if="currentProduction.awardImg"
              style="display: flex; align-items: center;"
            >
              <img
                :src="currentProduction.awardImg"
                class="production__awardImg"
              />
            </div>
          </div>
          <p class="production__award">{{ currentProduction.award }}</p>
          <div class="production__title-line"></div>
        </h2>
        <collapse :wineId="currentProduction.id"></collapse>
        <div class="download-file-container">
          <a
            :href="pdfLink"
            download="blason-capelviel"
            class="download link link-icon"
            >VIEW TASTING NOTES AS PDF (28KB)
          </a>
        </div>
      </div>
    </div>
  </section>
  <productions-view :perViewNumber="perViewNumber"></productions-view>
</template>

<script>
import mixin from "../mixins/mixins"
import Collapse from "../components/Collapse.vue"
import ProductionsView from "../components/ProductionsView.vue"

export default {
  name: "Production",
  components: { Collapse, ProductionsView },
  props: ["productionId"],
  mixins: [mixin],
  data() {
    return {
      // publicPath: process.env.BASE_URL,
      pdfLink: require("@/assets/pdf/blason-capelviel-new.pdf").default,
      slidePerView: 0,
      screenWidth: document.body.clientWidth,
      currentProduction: {},
      productionList: [
        {
          id: 1,
          name: "老藤佳丽酿干红",
          year: "2018",
          award: "2015.2016.2018年份荣获柏林世界葡萄酒大赛金奖",
          awardImg: require("@/assets/img/berlinaward.png"),
          imgUrl: require("@/assets/img/laotengjialiniang.jpeg"),
          imgAlt: "老藤佳丽酿干红",
        },
        {
          id: 2,
          name: "梅洛-赤霞珠干红",
          year: "2018",
          award: "2018年荣获柏林世界葡萄酒大赛金奖 里昂世界葡萄酒大赛金奖",
          awardImg: require("@/assets/img/lyonaward.png"),
          imgUrl: require("@/assets/img/meiluochixiazhu.jpeg"),
          imgAlt: "梅洛-赤霞珠干红",
        },
        {
          id: 3,
          name: "GSM混酿葡萄酒",
          year: "2018",
          award: "",
          imgUrl: require("@/assets/img/gsmhunniang.jpeg"),
          imgAlt: "GSM混酿葡萄酒",
        },
        {
          id: 4,
          name: "赤霞珠-西拉干红",
          year: "2018",
          award: "2018年荣获柏林世界葡萄酒大赛金奖 里昂世界葡萄酒大赛金奖",
          awardImg: require("@/assets/img/lyonaward.png"),
          imgUrl: require("@/assets/img/chixiazhuxila.jpeg"),
          imgAlt: "赤霞珠-西拉干红",
        },
        {
          id: 5,
          name: "赤霞珠干红",
          year: "2018",
          award: "2015.2016年荣获柏林世界葡萄酒大赛金奖",
          imgUrl: require("@/assets/img/chixiazhu.jpeg"),
          imgAlt: "赤霞珠干红",
        },
        {
          id: 6,
          name: "西拉干红",
          year: "2018",
          award: "2015.2016年荣获柏林世界葡萄酒大赛金奖",
          imgUrl: require("@/assets/img/xila.jpeg"),
          imgAlt: "西拉干红",
        },
        {
          id: 7,
          name: "霞多丽干白",
          year: "2018",
          award: "2016.2018年荣获柏林世界葡萄酒大赛金奖",
          awardImg: require("@/assets/img/berlinaward.png"),
          imgUrl: require("@/assets/img/xiaduoli.jpeg"),
          imgAlt: "霞多丽干白",
        },
      ],
    }
  },
  computed: {
    perViewNumber() {
      if (this.screenWidth <= 576) {
        return this.slidePerView + 1
      } else if (this.screenWidth <= 769 && this.screenWidth > 576) {
        return this.slidePerView + 2
      } else {
        return this.slidePerView + 3
      }
    },
  },
  created() {
    this.getCurrentProduction()
  },
  updated() {
    this.getCurrentProduction()
  },
  methods: {
    getCurrentProduction() {
      this.currentProduction = this.productionList.filter(
        production => production.id == this.productionId
      )[0]
    },
  },
}
</script>

<style>
.production__title-line {
  margin-top: 2rem;
  width: 2.5rem;
  height: 3px;
  border-top: 3px solid var(--first-color-light);
}

.production__awardImg {
  width: 4rem;
}

.production__award {
  font-size: 1rem;
  font-weight: normal;
  color: var(--first-color-light);
}

.download-file-container {
  margin-top: 2rem;
}

.download-file-container .download.link {
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-family: proxima-nova, "Proxima Nova", "Open Sans", Arial, sans-serif;
  font-weight: 700;
  padding: 16px 40px;
  line-height: 1;
  border-radius: 25px;
  text-transform: uppercase;
  color: #fff;
  background-color: #1c1c1c;
  transition: background-color 0.3s;
  cursor: pointer;
}

.download-file-container .link-icon:hover {
  background-color: var(--first-color-light);
}
</style>

/*
 * @Author: hhhhhq
 * @Date: 2021-01-21 09:07:27
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-21 09:10:56
 * @Description: file content
 */
export default {
  data() {
    return {
      headerHeight: 0,
      footerHeight: 0,
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
  computed: {
    containerHeight() {
      return (
        document.documentElement.clientHeight -
        this.headerHeight -
        this.footerHeight
      )
    },
  },
  mounted() {
    this.getHeaderHeight()
    this.getFooterHeight()
    window.onresize = () => {
      this.getHeaderHeight()
      this.getFooterHeight()
    }
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

<!--
 * @Author: hhhhhq
 * @Date: 2021-01-22 15:14:39
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-23 15:58:10
 * @Description: file content
-->

<template>
  <div class="collapse" style="margin-top: 2rem;">
    <div
      class="collapse-item"
      v-for="(item, inx) in list"
      :key="item"
      :class="{ 'is-active': activeNames.indexOf(inx) > -1 }"
    >
      <div class="collapse-item-tab" @click.prevent="handleChange(event, inx)">
        {{ item.title }}<span class="wbicon">+</span>
      </div>
      <transition
        name="my"
        @enter="enter"
        @after-enter="afterenter"
        @leave="leave"
        @after-leave="afterleave"
      >
        <div class="collapse-item-wrap" v-show="activeNames.indexOf(inx) > -1">
          <div class="collapse-item-content" v-html="item.content"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import mixin from "../mixins/mixins"
import { lists } from "../dbs/collapseLists"

export default {
  name: "Text",
  mixins: [mixin],
  props: {
    wineId: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      activeNames: [0],
      list: [],
    }
  },
  mounted() {
    this.list = lists.filter(list => list.id === this.wineId)[0].wineInfo
  },
  methods: {
    // handleChange(e, inx) {
    //   if (this.activeNames.indexOf(inx) > -1) {
    //     var i = this.activeNames.indexOf(inx)
    //     this.activeNames.splice(i, 1)
    //   } else {
    //     this.activeNames.splice(0, 0, inx)
    //   }
    // },
    handleChange(e, inx) {
      if (this.activeNames.indexOf(inx) > -1) {
        var i = this.activeNames.indexOf(inx)
        this.activeNames.splice(i, 1)
      } else {
        if (this.activeNames.length > 0) {
          this.activeNames = []
          this.activeNames.splice(0, 0, inx)
        } else {
          this.activeNames.splice(0, 0, inx)
        }
      }
    },
    enter(el) {
      var h = el.scrollHeight
      el.style.setProperty("--h", h + "px")
    },
    afterenter(el) {
      el.removeAttribute("style")
    },
    leave(el) {
      var h = el.scrollHeight
      el.style.setProperty("--h", h + "px")
    },
    afterleave(el) {
      el.style.setProperty("--h", "")
    },
  },
}
</script>

<style>
.collapse-item.is-active .collapse-item-tab {
  border-bottom-color: transparent;
}
.collapse-item-tab {
  display: flex;
  height: 4rem;
  line-height: 4rem;
  background-color: var(--first-color-lighten);
  color: #303133;
  cursor: pointer;
  border-bottom: 1px solid #ebeef5;
  font-size: var(--normal-font-size);
  font-weight: 500;
  transition: border-bottom-color 0.3s;
  outline: none;
}

.collapse-item-wrap {
  will-change: height;
  overflow: hidden;
  box-sizing: border-box;
  border-bottom: 1px solid #ebeef5;
}

.collapse-item-content {
  padding-bottom: var(--mb-2);
  font-size: var(--smaller-font-size);
  color: #999;
  line-height: 1.769230769230769;
}

.my-enter-active {
  animation: my-in 0.3s ease-in-out;
}

.my-leave-active {
  animation: my-out 0.3s ease-in-out;
}

@keyframes my-in {
  0% {
    height: 0;
  }

  100% {
    height: var(--h);
    /* height: 71px; */
  }
}

@keyframes my-out {
  0% {
    height: var(--h);
    /* height: 71px; */
  }
  100% {
    height: 0;
  }
}

.wbicon {
  margin-left: auto;
  transition: 0.3s;
  color: var(--first-color);
  font-size: 1.4rem;
  user-select: none;
}

.collapse-item.is-active .wbicon {
  transform: rotate(45deg);
}

.collapse__wrap-text {
  font-size: var(--normal-font-size);
  margin-bottom: var(--mb-3);
}

.collapse__subtitle {
  margin-bottom: var(--mb-2);
  font-size: var(--normal-font-size);
  color: #303133;
}

.collapse__subtitle-expand {
  font-weight: normal;
}
</style>

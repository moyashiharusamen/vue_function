<template>
<div class="graph2">
  <h1>
    <span v-for="(words, index) in text" :key="index" v-text="words" class="item delay-animation"/>
  </h1>

  <h2>Price</h2>

  <div class="graph-area">
    <div class="graph-inner">
      <div class="line">
        <svg width="50" :height="list[0].carrot">
          <rect x="0" y="0" width="50" :height="list[0].carrot" />
        </svg>

        <span class="text">carrot</span>
      </div>

      <div class="line">
        <svg width="50" :height="list[0].radish">
          <rect x="0" y="0" width="50" :height="list[0].radish" />
        </svg>

        <span class="text">radish</span>
      </div>

      <div class="line">
        <svg width="50" :height="list[0].napa">
          <rect x="0" y="0" width="50" :height="list[0].napa" />
        </svg>

        <span class="text">napa</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      text: 'Graph2'
    }
  },
  computed: {
    ...mapGetters({
      'list': 'graph2/priceList'
    })
  }
}
</script>

<style lang="scss" scoped>
.graph2 {
  .graph-area {
    padding-bottom: 50px;
    position: relative;

    &:before {
      content: "300";
      display: block;
      position: absolute;
      left: -40px;
      top: 0;
    }

    .graph-inner {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      height: 300px;
      border-left: 1px solid #333;
      border-bottom: 1px solid #333;
      position: relative;

      &:before,
      &:after {
        display: block;
        position: absolute;
        left: -40px;
        transform: translateY(50%);
      }

      &:before {
        content: "100";
        bottom: 100px;
      }

      &:after {
        content: "200";
        bottom: 200px;
      }
    }

    .line {
      display: flex;
      align-items: flex-end;
      position: absolute;
      left: 50px;
      bottom: 0;

      svg {
        display: block;
        transition: height .5s ease;

        rect {
          fill: #f27f3a;
          transition: height .5s ease;
        }
      }

      &:nth-of-type(2) {
        left: 50%;
        transform: translateX(-50%);

        rect {
          fill: #cbbeab;
        }
      }

      &:last-of-type {
        left: calc(100% - 50px);
        transform: translate(-100%);

        rect {
          fill: #89a222;
        }
      }

      .text {
        font-size: 24px;
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>

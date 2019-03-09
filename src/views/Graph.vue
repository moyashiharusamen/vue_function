<template>
<div class="graph">
  <h1>
    <span v-for="(words, index) in text" :key="index" v-text="words" class="item delay-animation"/>
  </h1>

  <h2>Price</h2>

  <div class="graph-area">
    <div class="graph-inner">
      <div class="line">
        <svg width="50" :height="graphList[updateIndex].price">
          <rect x="0" y="0" width="50" :height="graphList[updateIndex].price" />
        </svg>

        <span class="text">tomato</span>
      </div>
    </div>
  </div>

  <div class="input-area">
    <input type="number" v-model="input.price" ref="price">
    <span class="error-text" v-if="!inputExistence">値を入力してください</span>
    <span class="error-text" v-else-if="!inputDigits">入力値は300以下にしてください</span>
  </div>

  <div class="button-wrap">
    <button
      type="button"
      class="button-primary"
      @click="updateGraph"
      :disabled="!inputDigits"
    >Change</button>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      text: 'Input Graph',
      input: {
        price: null
      },
      validation: {
        price: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'graphList',
      'updateIndex'
    ]),
    inputExistence () {
      return this.input.price
    },
    inputDigits () {
      return this.input.price &&
             this.$refs.price.value <= 300
    }
  },
  methods: {
    ...mapActions([
      'updateGraphList'
    ]),
    updateGraph () {
      this.updateGraphList(this.input.price)
    }
  }
}
</script>

<style lang="scss" scoped>
.graph {
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

      .text {
        font-size: 24px;
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    svg {
      display: block;
      transition: height .5s ease;

      rect {
        fill: tomato;
        transition: height .5s ease;
      }
    }
  }

  .input-area {
    position: relative;

    input {
      margin-top: 20px;
    }

    .error-text {
      color: #f00;
      position: absolute;
      left: 0;
      bottom: -30px;
    }
  }

  .button-primary {
    margin-top: 30px;
  }
}
</style>

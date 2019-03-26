<template>
  <div>
    <h1>
      <span v-for="(words, index) in text" :key="index" v-text="words" class="item delay-animation"></span>
    </h1>

    <h2>郵便番号から住所を検索</h2>

    <div class="search-element">
      <input type="number" v-model="inputValue" placeholder="郵便番号を入力">
      <button type="button" @click="getApi" class="search-button">検索</button>
    </div>

    <div class="text-element">
      <h3>検索結果</h3>

      <transition name="text">
        <p v-if="erroredLoad" key="load" :class="{ errorText: erroredLoad }">存在しない郵便番号です</p>
        <p v-else-if="erroredNumber" key="number" :class="{ errorText: erroredNumber }">7桁の数字を入力してください</p>
        <p v-else-if="address" key="result" class="result">{{ address.prefecture_name }}{{ address.city_name }}{{
          address.town_name }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      text: 'Search',
      inputValue: '',
      address: '',
      erroredNumber: false,
      erroredLoad: false
    }
  },
  methods: {
    getApi () {
      if (this.inputValue.length < 7 || this.inputValue.length > 7) {
        this.erroredNumber = true
        this.erroredLoad = false

        return
      }

      const halfValue = this.inputValue.slice(0, 3)

      axios.get(`https://kmdsbng.github.io/zipcode_jp/zip_code/${halfValue}/${this.inputValue}.json`)
        .then(value => {
          this.erroredNumber = false
          this.erroredLoad = false

          this.address = value.data[0]
        })
        .catch(() => {
          this.erroredNumber = true
          this.erroredLoad = true
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-element {
    display: flex;
    align-items: center;
    margin-top: 30px;

    input {
      width: 300px;
      padding: 4px 10px 2px;
      font-size: 16px;
    }

    .search-button {
      min-width: 150px;
      margin: 0 0 0 8px;
      padding: 6px 10px;
      border: 1px solid #036;
      border-radius: 4px;
      transition: .1s ease;

      &:hover,
      &focus {
        background: #036;
        color: #fff;
      }
    }
  }

  .text-element {
    margin-top: 15px;
    padding: 20px;
    background: #fff;
    border-radius: 4px;

    p {
      margin-top: 8px;
    }

    .result {
      font-size: 24px;
      font-weight: bold;
    }
  }

  .errorText {
    color: #f00;
  }

  .text-enter-active,
  .text-leave-active {
    transition: opacity .3s;
  }

  .text-leave-active {
    display: none;
  }

  .text-enter {
    opacity: 0;
  }
</style>

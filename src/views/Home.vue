<template>
<div class="home">
  <h1>
    <span v-for="(words, index) in text" :key="index" v-text="words" class="item delay-animation"/>
  </h1>

  <ul class="list">
    <li><router-link to="/modal">Modal</router-link></li>
    <li><router-link to="/sort">Sort</router-link></li>
    <li><router-link to="/graph">Graph</router-link></li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      text: 'Function List'
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin-top: 30px;
  padding: 0 0 0 20px;

  > li {
    &:not(:first-of-type) {
      margin-top: 20px;
    }

    > a {
      position: relative;
      padding-left: 20px;
      font-size: 18px;

      &:before {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        background: #036;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
  }
}
</style>

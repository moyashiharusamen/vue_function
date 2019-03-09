<template>
<div class="home">
  <h1 class="delay-text">
    <span v-for="(words, index) in text" :key="index" v-text="words" class="item delay-animation"/>
  </h1>

  <ul class="list">
    <li>
      <router-link to="/modal">Modal</router-link>
    </li>
    <li>
      <router-link to="/sort">Sort</router-link>
    </li>
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

@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}

.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 2rem;
  animation: text-in .3s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}

@for $i from 0 through 14 {
  .delay-animation:nth-child(#{$i + 1}) {
    animation-delay: calc(#{$i} * 100ms + 200ms);
  }
}

.list {
  margin-top: 30px;
  padding: 0 0 0 20px;

  > li {
    &:not(:first-of-type) {
      margin-top: 20px;
    }

    > a {
      display: block;
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

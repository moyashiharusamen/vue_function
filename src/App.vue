<template>
  <div id="app">
    <div class="content">
      <div class="content-inner">
        <the-header />
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import 'normalize.css'
import TheHeader from '@/components/Header'

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
  body {
    background: #eee;
  }

  a {
    text-decoration: none;
    transition: .5s;

    &:active,
    &:visited {
      color: #333;
    }

    &:hover,
    &:focus {
      opacity: .7;
    }
  }

  ul,
  ol {
    list-style: none;
  }

  .content-inner {
    width: 1000px;
    margin: 0 auto;
  }
</style>

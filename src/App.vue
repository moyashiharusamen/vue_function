<template>
  <div id="app">
    <the-header />

    <div class="content">
      <div class="content-inner">
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

  * {
    margin: 0;
    padding: 0;
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

  .content {
    padding: 40px 0;
  }

  .content-inner {
    width: 1000px;
    margin: 0 auto;
  }

  h1 {
    font-size: 20px;
  }
</style>

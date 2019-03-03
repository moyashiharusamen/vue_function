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
import './assets/scss/reset.scss'

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">

</style>

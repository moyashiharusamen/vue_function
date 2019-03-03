<template>
  <div id="app">
    <the-header />

    <div class="content">
      <div class="content-inner">
        <transition name="content">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import 'normalize.css'
import TheHeader from '@/components/Header'
import './assets/scss/reset.scss'
import './assets/scss/transition.scss'
import './assets/scss/button.scss'

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">

</style>

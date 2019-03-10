<template>
  <div id="app">
    <the-header />

    <div class="content">
      <main class="main">
        <div class="main-inner">
          <transition name="content">
            <router-view/>
          </transition>
        </div>
      </main>

      <side-menu />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/Header'
import SideMenu from '@/components/SideMenu'
import './assets/css/normalize.css'
import './assets/scss/reset.scss'
import './assets/scss/content.scss'
import './assets/scss/heading.scss'
import './assets/scss/transition.scss'
import './assets/scss/button.scss'

export default {
  components: {
    TheHeader,
    SideMenu
  }
}
</script>

<style lang="scss">

</style>

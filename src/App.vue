<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'

export default {
  created () {
    // console.log(this.$store.getters.list)
  }
}
</script>

<style lang="scss">
body {
  background: #eee;
}
#app {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
</style>

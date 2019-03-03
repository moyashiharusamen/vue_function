<template>
  <header class="header">
    <h1>Vue Stydy</h1>

    <nav>
      <ul>
        <li><router-link to="/">dummy</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 20px;
  }
}
</style>

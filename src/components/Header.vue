<template>
  <header class="header">
    <div class="header-inner">
      <h1>Vue Stydy</h1>

      <nav>
        <ul>
          <li><router-link to="/">dummy</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  padding: 5px 0 10px;
  border-bottom: 1px solid #333;

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    margin: 0 auto;
  }

  h1 {
    font-size: 24px;
  }
}
</style>

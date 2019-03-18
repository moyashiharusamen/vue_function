<template>
  <header class="header">
    <div class="header-inner">
      <h1><router-link to="/">Vue Study</router-link></h1>
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
  padding: 20px 0;
  background: #036;
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  h1 {
    font-size: 32px;
    color: #F9FBE7;

    a {
      color: #F9FBE7;
    }
  }
}
</style>

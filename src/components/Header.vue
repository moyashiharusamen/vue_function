<template>
  <header class="header">
    <div class="header-inner">
      <h1><router-link to="/">Vue Study</router-link></h1>

      <nav>
        <ul>
          <li><router-link to="/modal">modal</router-link></li>
          <li><router-link to="/sort">sort</router-link></li>
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
  background: #036;
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
    color: #F9FBE7;
  }

  nav {
    > ul {
      display: flex;
      justify-content: center;

      > li {
        &:not(:first-of-type) {
          margin-left: 20px;
        }

        > a {
          font-size: 18px;
        }
      }
    }
  }

  a {
    color: #F9FBE7;
  }
}
</style>

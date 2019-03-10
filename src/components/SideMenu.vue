<template>
<aside class="side-menu">
  <h1>Function List</h1>

  <nav>
    <ul>
      <li><router-link to="/">モーダル</router-link></li>
      <li><router-link to="/sort">ソート</router-link></li>
      <li><router-link to="/graph">グラフ</router-link></li>
    </ul>
  </nav>
</aside>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>

<style lang="scss" scoped>
.side-menu {
  width: 300px;
  padding: 20px 0;
  border-right: 1px solid #333;
  position: fixed;
  top: 77px;
  left: 0;
  bottom: 0;

  h1 {
    padding: 0 40px 0 20px;
  }

  ul {
    > li {
      &:not(:first-of-type) {
        margin-top: 20px;
      }

      > a {
        display: block;
        padding: 0 40px 0 20px;
        font-weight: bold;

        &:hover,
        &:focus {
          color: #036;
        }
      }
    }
  }
}
</style>

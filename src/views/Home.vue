<template>
<div class="home">
  <h1>Function List</h1>

  <ul class="list">
    <li>
      <router-link to="/modal">dummy</router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
ul {
  margin-top: 10px;
  padding: 0 0 0 20px;

  > li {
    > a {
      display: block;
      position: relative;
      padding-left: 20px;

      &:before {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        background: #036;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
  }
}
</style>

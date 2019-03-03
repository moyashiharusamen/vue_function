<template>
  <div>
    <h1>Sort</h1>

    <table class="sort-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Text</th>
          <th @click="ascList">Number</th>
        </tr>
      </thead>

      <transition-group tag="tbody" name="sort">
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.date }}</td>
          <td>{{ item.text }}</td>
          <td>{{ item.number }}</td>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      numberSortFlag: 'asc'
    }
  },
  computed: {
    ...mapGetters(['list'])
  },
  methods: {
    ...mapActions(['ascList'])
  }
}
</script>

<style lang="scss" scoped>
.sort-table {
  width: 100%;

  thead {
    display: block;
    background: #1f8fff;
    color: #fff;

    > tr {
      display: flex;
      justify-content: space-around;

      > th {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% / 3);
        padding: 20px 10px 18px;
        font-size: 20px;
        font-weight: normal;
        cursor: pointer;

        &:after {
          content: "▼";
          display: block;
          margin-left: 10px;
          font-size: 10px;
        }

        &.desc {
          &:after {
            content: "▲";
          }
        }
      }
    }
  }

  tbody {
    text-align: center;

    > tr {
      width: 100%;
      display: flex;
      justify-content: space-around;
      padding: 12px 10px 10px;
      border-bottom: 1px solid #1f8fff;

      > td {
        width: calc(100% / 3);
        font-size: 16px;
      }
    }
  }
}
</style>

<template>
  <div>
    <h1>Sort</h1>

    <table class="sort-table">
      <thead>
        <tr>
          <th
            @click="sorted('date')"
            @keyup.enter.space="sorted('date')"
            tabindex="0"
          >Date</th>
          <th
            @click="sorted('text')"
            @keyup.enter.space="sorted('text')"
            tabindex="0"
          >Text</th>
          <th
            @click="sorted('price')"
            @keyup.enter.space="sorted('price')"
            tabindex="0"
          >Price</th>
        </tr>
      </thead>

      <transition-group tag="tbody" name="sort">
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.date }}</td>
          <td>{{ item.text }}</td>
          <td>{{ item.price }}</td>
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
    ...mapActions(['sorted'])
  }
}
</script>

<style lang="scss" scoped>
.sort-table {
  width: 100%;

  thead {
    display: block;
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
        background: #1f8fff;
        font-size: 20px;
        font-weight: normal;
        cursor: pointer;

        &:hover,
        &:focus {
          opacity: .8;
        }

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

.sort-leave-active {
  transition: .5s;
}
.sort-leave-to {
  opacity: 0;
}
.sort-move {
  transition: .5s;
}
</style>

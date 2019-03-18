<template>
  <div>
    <h1><span v-for="(words, index) in text" :key="index" v-text="words" class="item delay-animation"/></h1>

    <table class="sort-table">
      <thead>
        <tr>
          <th
            @click="sorted('date')"
            @keyup.enter.space="sorted('date')"
            :class="[ sortIconFlag.date ? 'asc' : 'desc' ]"
            tabindex="0"
          ><span>Date<span class="icon">{{ sortButtonText('date') }}</span></span></th>
          <th
            @click="sorted('text')"
            @keyup.enter.space="sorted('text')"
            :class="[ sortIconFlag.text ? 'asc' : 'desc' ]"
            tabindex="0"
          ><span>Text<span class="icon">{{ sortButtonText('text') }}</span></span></th>
          <th
            @click="sorted('price')"
            @keyup.enter.space="sorted('price')"
            :class="[ sortIconFlag.price ? 'asc' : 'desc' ]"
            tabindex="0"
          ><span>Price<span class="icon">{{ sortButtonText('price') }}</span></span></th>
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
      text: 'Sort',
      numberSortFlag: 'asc'
    }
  },
  computed: {
    ...mapGetters([
      'list',
      'sortIconFlag'
    ])
  },
  methods: {
    ...mapActions([
      'sorted'
    ]),
    sortButtonText (key) {
      return this.sortIconFlag[key] ? '昇順' : '降順'
    }
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
        background: #036;
        font-size: 20px;
        font-weight: normal;
        cursor: pointer;

        > span {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .icon {
          width: 10px;
          height: 14px;
          margin-left: 10px;
          font-size: 0;
          color: transparent;

          &:after {
            content: "▼";
            display: block;
            font-size: 12px;
            color: #fff;
          }
        }

        &.asc {
          .icon {
            &:after {
              content: "▲";
            }
          }
        }

        &:hover,
        &:focus {
          opacity: .8;
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

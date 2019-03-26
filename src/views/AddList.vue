<template>
  <div>
    <h1>
      <span v-for="(words, index) in text" :key="index" v-text="words" class="item delay-animation"></span>
    </h1>

    <form class="input">
      <div class="input-area">
        <div class="input-unit">
          <span><label for="name">Name</label></span>
          <input type="text" id="name" v-model="input.name">
        </div>

        <div class="input-unit">
          <span><label for="b-t">B/T</label></span>
          <input type="text" id="b-t" v-model="input.bt">
        </div>

        <div class="input-unit">
          <span><label for="position">Position</label></span>
          <input type="text" id="position" v-model="input.position">
        </div>
      </div>

      <div class="button-wrap">
        <button type="button" class="add-button" @click="updateAll" :disabled="!allStatusReady">追加</button>
      </div>
    </form>

    <table class="list-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>B/T</th>
          <th>Position</th>
        </tr>
      </thead>

      <transition-group tag="tbody" name="addList">
        <tr v-for="item in reverseAddList" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.bt }}</td>
          <td>{{ item.position }}</td>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      text: 'Add List',
      input: {
        name: null,
        bt: null,
        position: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'reverseAddList'
    ]),
    allStatusReady () {
      return Boolean(this.input.name && this.input.bt && this.input.position)
    }
  },
  methods: {
    ...mapActions([
      'updateAddList'
    ]),
    updateAll () {
      console.log(this.allStatusReady)
      if (!this.input.name || !this.input.bt || !this.input.position) {
        return
      }

      this.updateAddList({
        listName: this.input.name,
        listBt: this.input.bt,
        listPosition: this.input.position
      })

      this.input = {
        name: '',
        bt: '',
        position: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-area {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .input-unit {
    > span {
      display: block;
      font-size: 20px;
    }

    > input {
      display: block;
      margin-top: 8px;
      padding: 8px 16px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: inset 0 1px 4px 0 rgba(0,0,0,.2);
      font-size: 18px;
    }
  }
}

.list-table {
  width: 100%;
  margin-top: 40px;
  border-collapse: collapse;

  thead {
    color: #fff;

    > tr {
      > th {
        width: calc(100% / 3);
        padding: 10px;
        background: #036;
        font-size: 24px;
        font-weight: normal;

        > span {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
      }
    }
  }

  tbody {
    text-align: center;

    > tr {
      width: 100%;
      border-bottom: 1px solid #1f8fff;

      > td {
        width: calc(100% / 3);
        padding: 12px 10px 10px;
        font-size: 20px;
      }
    }
  }

  .addList-enter-active {
    transition: .8s;
  }
  .addList-enter {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>

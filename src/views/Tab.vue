<template>
  <div class="tab">
    <h1>
      <span v-for="(words, index) in text" :key="index" v-text="words" class="item delay-animation"></span>
    </h1>

    <ul class="tab-list" role="tablist">
      <li role="presentation">
        <button type="button" role="tab" :aria-selected="true" aria-controls="tab-item" @click="changeTab(1)">
          タブ1
        </button>
      </li>
      <li role="presentation">
        <button type="button" role="tab" :aria-selected="false" aria-controls="tab-item-02" @click="changeTab(2)">
          タブ2
        </button>
      </li>
      <li role="presentation">
        <button type="button" role="tab" :aria-selected="false" aria-controls="tab-item-03" @click="changeTab(3)">
          タブ3
        </button>
      </li>
    </ul>

    <div class="tab-content">
      <transition name="tab">
        <div id="tab-item" role="tabpanel" tabindex="0" v-show="showTab(1)">
          <p>タブコンテンツ1 タブコンテンツ1 タブコンテンツ1 タブコンテンツ1 タブコンテンツ1 タブコンテンツ1 タブコンテンツ1 タブコンテンツ1 タブコンテンツ1 タブコンテンツ1 タブコンテンツ1 タブコンテンツ1
            タブコンテンツ1 タブコンテンツ1 タブコンテンツ1 タブコンテンツ1</p>
        </div>
      </transition>
      <transition name="tab">
        <div id="tab-item-02" role="tabpanel" tabindex="0" v-show="showTab(2)">
          <p>タブコンテンツ2 タブコンテンツ2 タブコンテンツ2 タブコンテンツ2 タブコンテンツ2 タブコンテンツ2 タブコンテンツ2 タブコンテンツ2 タブコンテンツ2 タブコンテンツ2 タブコンテンツ2 タブコンテンツ2
            タブコンテンツ2 タブコンテンツ2 タブコンテンツ2 タブコンテンツ2</p>
        </div>
      </transition>
      <transition name="tab">
        <div id="tab-item-03" role="tabpanel" tabindex="0" v-show="showTab(3)">
          <p>タブコンテンツ3</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      text: 'Tab',
      activeNumber: 1
    }
  },
  methods: {
    changeTab (index) {
      this.activeNumber = index
    },
    showTab (index) {
      return this.activeNumber === index
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab {
    width: 100%;
    margin: 0 auto;
  }

  .tab-list {
    display: flex;
    justify-content: space-between;

    > li {
      flex-basis: calc(100% / 3);

      button {
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        text-align: center;
        background: #036;
        color: #fff;

        &:hover,
        &:focus {
          opacity: .6;
        }
      }
    }
  }

  .tab-content {
    padding: 30px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    border-radius: 0 0 10px 10px;
  }

  .tab-enter-active,
  .tab-leave-active {
    transition: opacity .4s ease, transform .4s ease;
  }

  .tab-leave-active {
    display: none;
  }

  .tab-enter {
    opacity: 0;
    transform: translateY(-30%);
  }

  button {
    margin: 0;
    overflow: visible;
    text-transform: none;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  ul {
    list-style: none;
  }
</style>

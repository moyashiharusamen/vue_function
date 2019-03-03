<template>
<div>
  <h1>Modal</h1>

  <button type="button" class="button-primary" @click="openModal">Open</button>

  <transition name="modal">
    <div class="modal modal-overlay" v-if="modalFlag" @click.self="closeModal">
      <transition name="content">
        <div class="modal-window" v-if="!modalNextContentFlag">
          <p>Modal1</p>

          <div class="button-wrap">
            <a href="#" @click.prevent="closeModal" class="button-secondary">Close</a>
            <a href="#" @click.prevent="nextModal" class="button-primary">Next</a>
          </div>
        </div>
        <div class="modal-window" v-else-if="modalNextContentFlag">
          <p>Modal2</p>

          <div class="button-wrap">
            <a href="#" @click.prevent="prevModal" class="button-secondary">Prev</a>
            <router-link to="/" class="button-primary">Complete</router-link>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      modalNextContentFlag: false
    }
  },
  computed: {
    ...mapGetters(['modalFlag'])
  },
  methods: {
    openModal () {
      this.$store.dispatch('updateModalFlag', true)
    },
    closeModal () {
      this.$store.dispatch('updateModalFlag', false)
    },
    nextModal () {
      this.modalNextContentFlag = true
    },
    prevModal () {
      this.modalNextContentFlag = false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  &.modal-overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
  }

  .modal-window {
    padding: 20px;
    min-width: 400px;
    min-height: 200px;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: 1s;

  .modal-window {
    transition: .5s;
  }
}
.modal-enter,
.modal-leave-to{
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translate(-50%, -70%);
  }
}

.content-enter-active,
.content-leave-active {
  transition: .6s;
}

.content-enter {
  opacity: 0;
}

.content-leave {
  opacity: 0;
}
</style>

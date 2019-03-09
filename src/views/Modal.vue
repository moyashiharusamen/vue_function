<template>
<div>
  <h1>Modal</h1>

  <button type="button" class="button-primary" @click="openModal">Open</button>

  <transition name="modal">
    <div class="modal modal-overlay" v-if="modalFlag" @click.self="closeModal">
      <transition name="content">
        <div class="modal-window" v-if="!modalNextFlag">
          <p>Modal1</p>

          <div class="button-wrap">
            <button type="button" @click="closeModal" class="button-secondary">Close</button>
            <button type="button" @click="nextModal" class="button-primary">Next</button>
          </div>
        </div>
        <div class="modal-window" v-else-if="modalNextFlag">
          <p>Modal2</p>

          <div class="button-wrap">
            <button type="button" @click="prevModal" class="button-secondary">Prev</button>
            <button type="button" class="button-primary" @click="closeModal">Complete</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'modalFlag',
      'modalNextFlag'
    ])
  },
  methods: {
    ...mapActions([
      'updateModalFlag',
      'updateModalNextFlag'
    ]),
    openModal () {
      this.updateModalFlag(true)
      this.controlTabindex()
    },
    closeModal () {
      this.updateModalFlag(false)
      this.controlTabindex()
    },
    nextModal () {
      this.updateModalNextFlag(true)
    },
    prevModal () {
      this.updateModalNextFlag(false)
    },
    controlTabindex () {
      const content = document.getElementById('app')
      const a = content.getElementsByTagName('a')
      const button = content.getElementsByTagName('button')
      let [i, j] = [0, 0]
      const buttonLength = button.length
      const aLength = a.length

      if (this.modalFlag) {
        for (i; i < aLength; i++) {
          a[i].setAttribute('tabindex', -1)
        }

        for (j; j < buttonLength; j++) {
          button[j].setAttribute('tabindex', -1)
        }
      } else if (!this.modalFlag) {
        for (i; i < aLength; i++) {
          a[i].removeAttribute('tabindex')
        }

        for (j; j < buttonLength; j++) {
          button[j].removeAttribute('tabindex')
        }
      }
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

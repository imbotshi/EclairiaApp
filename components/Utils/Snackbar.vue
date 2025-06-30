<template>
  <div
    v-if="show"
    class="container-snackbar rounded"
    :class="'snackbar-' + type"
  >
    <div class="snackbar-type-img">
      <component
        v-if="show"
        :is="getSvgAlertIcon"
      />
    </div>
    <div class="snackbar-content">
      <div>
        {{ message }}
      </div>
      <div class="snackbar-buttons">
        <button
          class="py-3 px-4 rounded"
          @click="hiddenSnackbar()"
        >
          Fermer
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions, mapState } from "vuex"
import SnackbarPayload from "~/types/store/payload/SnackbarPayload";
import StateStore from '~/types/store/StateStore'

export default Vue.extend({
  name: 'UtilsSnackbar',
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      type(state: StateStore): string {
        return state.snackbar.type
      },
      message(state: StateStore): string {
        return state.snackbar.message
      }
    }),
    show() {
      return this.message !== '' && this.message !== undefined
    },
    getSvgAlertIcon() {
      return `SvgAlert${this.ucFirst(this.type)}`
    }
  },
  methods: {
    ...mapActions({
      updateSnackbarInfos: 'snackbar/updateSnackbarInfos'
    }),
    hiddenSnackbar(): void {
      const payload: SnackbarPayload = {
        type: '',
        message: '',
      }

      this.$store.dispatch('snackbar/updateSnackbarInfos', payload)
    }
  }
})
</script>

<style scoped>
.container-snackbar {
  display: flex;
  border-radius: 20px;
  padding: 0;
  font-size: 15px;
  position: absolute;
  top: 0;
  z-index: 999;
}
.snackbar-warning {
  background-color: #e8f64c;
}

.snackbar-warning .snackbar-type-img {
  background-color: rgb(249, 203, 56) !important;
}

.snackbar-danger {
  background-color: #ff4675;
  color: white;
}

.snackbar-danger .snackbar-type-img {
  background-color: rgb(241, 16, 1) !important;
}

.snackbar-success {
  background-color: #07c094;
  color: white;
}

.snackbar-success .snackbar-type-img {
  background-color: #03ffc2 !important;
}

.snackbar-info {
  background-color: #01156a;
  color: white;
}

.snackbar-info .snackbar-type-img {
  background-color: #000a2e !important;
}
.snackbar-type-img {
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.snackbar-content {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
}
.snackbar-buttons {
  padding: 0.7rem;
}

.snackbar-buttons button {
  padding: 0.5rem 0.9rem;
  border-radius: 7px;
  text-transform: uppercase;
}
.snackbar-buttons button:hover {
  background-color: rgba(3, 3, 3, 0.1);
}
</style>
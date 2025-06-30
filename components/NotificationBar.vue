<template>
  <div class="fixed top-0 z-50 w-full h-[76px] bg-background">
    <div
      class="relative flex items-center justify-center w-full h-full text-white"
    >
      <!-- logo -->
      <p
        class="font-bold capitalize font-paralucent text-[22.6137px] leading-[90%] h-[20px]"
      >
        {{ text }}
      </p>
      <div v-if="isLoading" class="absolute bottom-0 hidden w-full">
        <div class="relative w-full h-[3px] negative-bg bg-inactive">
          <div
            class="absolute h-[3px] bg-player"
            :style="{ width: playerPourcentage + '%' }"
            id="progress"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Profilbar",
  props: {
    text: {
      type: String,
      default: "Suivant",
      required: true,
    },
  },
  computed: {
    ...mapGetters("player", ["playerPourcentage", "isLoading"]),
  },
});
</script>
<style scoped>
.bg-inactive {
  background: rgba(245, 245, 245, 0.16);
  transform: matrix(1, 0, 0, -1, 0, 0);
}

.active-bg {
  background: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
}

#progress::after {
  content: "";
  position: absolute;
  bottom: -8px;
  height: 16px;
  width: 16px;
  border-radius: 100%;
  background: #f72559;
  right: -16px;
  z-index: inherit;
}
</style>

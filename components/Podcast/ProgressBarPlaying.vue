<template>
  <div class="absolut w-full container-progress">
    <div class="relative w-full h-[3px] negative-bg bg-inactive">
      <div
        class="absolute h-[3px] bg-player"
        :style="{ width: progressPercent + '%' }"
        id="progress"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PodcastProgressBarPlaying',
  props: {
    progressPercent: {
      type: Number,
      default: 5
    }
  }
})
</script>

<style scoped>
.container-progress {
  top: 2px !important;
}
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
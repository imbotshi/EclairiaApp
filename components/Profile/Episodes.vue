<template>
  <div
    class="flex flex-col space-y-[30.15px] pl-[20.1px] pr-[25.69px] pt-[52.77px]"
  >
    <div class="flex">
      <p class="font-bold text-[22.6137px] capitalize leading-input">
        Épisodes
      </p>
    </div>
    <div
      v-for="item in results"
      :key="item.id"
      :class="{ 'bg-active': item.active, 'bg-background': !item.active }"
      class="rounded-[16px] h-[104px] flex items-center justify-center p-[12px]"
    >
      <div
        class="w-full max-w-[300px] flex items-center justify-center space-x-[10px]"
      >
        <div
          class="h-[80px] !w-[80px] !min-w-[80px] !max-w-[80px] bg-background rounded-[12px] flex justify-center items-center"
        >
          <div
            class="rounded-full bg-active flex justify-center items-center h-[31.51px] w-[31.51px]"
          >
            <svg
              width="10.71"
              height="12.51"
              class="text-background"
              viewBox="0 0 33 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.692383 16.001C0.692383 7.30574 7.76325 0.238281 16.446 0.238281C25.1287 0.238281 32.1995 7.30574 32.1995 16.001C32.1995 24.678 25.1287 31.7454 16.446 31.7454C7.76325 31.7454 0.692383 24.678 0.692383 16.001ZM22.2244 17.5953C22.3917 17.4282 22.6046 17.1698 22.6502 17.109C22.8935 16.7898 23.0151 16.3946 23.0151 16.001C23.0151 15.5587 22.8783 15.1483 22.6198 14.814C22.5986 14.7928 22.5571 14.7476 22.503 14.6888C22.4019 14.5787 22.2567 14.4207 22.118 14.282C20.8711 12.9445 17.6169 10.7559 15.9138 10.0871C15.6553 9.98226 15.0015 9.75276 14.6517 9.73756C14.3172 9.73756 13.9979 9.81355 13.6937 9.96554C13.3136 10.1783 13.0095 10.5127 12.8422 10.9079C12.7358 11.1814 12.5685 12.0022 12.5685 12.0174C12.4012 12.9141 12.31 14.3732 12.31 15.9843C12.31 17.5209 12.4012 18.9176 12.5381 19.8296C12.5418 19.8333 12.5549 19.8986 12.5752 19.9999C12.637 20.3079 12.7657 20.9496 12.903 21.2127C13.2376 21.851 13.8914 22.2462 14.5909 22.2462H14.6517C15.1079 22.231 16.0659 21.8358 16.0659 21.8206C17.6778 21.1519 20.8558 19.0696 22.1332 17.6865L22.2244 17.5953Z"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3338_5361"
                  x1="0.692383"
                  y1="2.52971"
                  x2="37.8939"
                  y2="18.3828"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F10F47" />
                  <stop offset="1" stop-color="#FF4775" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div class="flex flex-col h-[80px] space-y-[8px]">
          <p
            class="overflow-hidden font-bold text-body leading-md text-ellipsis"
          >
            {{ item.title }}
          </p>
          <p
            class="leading-md overflow-hidden text-[14px] font-sofia font-normal tracking-[-0.31595px] text-ellipsis"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProfileEpisodes',
  props: {
    results: {
      type: Array,
      default() {
        return [
        ]
      }
    }
  }
})
</script>

<style scoped>
.bg-active {
  background: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
}
</style>

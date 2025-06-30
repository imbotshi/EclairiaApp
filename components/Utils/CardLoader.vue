<template>
  <div
    id="wrapper-loader"
    class="absolute right-1 h-[100%] flex items-center justify-center z-10 w-full"
  >
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      class="rotate-animation"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51808 6.3459 2.7612 8.17317C2.00433 10.0004 1.80629 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92893 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12"
        stroke="url(#paint0_linear_3164_580)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3164_580"
          x1="22"
          y1="20.5455"
          x2="-1.61465"
          y2="10.4823"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F10F47" />
          <stop offset="1" stop-color="#FF4775" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'UtilsCardLoader'
  })
</script>

<style scoped>
  #wrapper-loader {
    background: rgba(255,255,255,0.2) !important;
  }
</style>
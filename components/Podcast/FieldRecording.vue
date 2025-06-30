<template>
  <div
    class="border-[0.820455px] mt-[16px] border-[#0036FF] w-full h-[60px] rounded-[11.4px] flex justify-center items-center py-[7.6px] px-[11.4px]"
  >
    <div
      class="flex items-center justify-center space-x-1 text-mask h-[36px]"
    >
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="url(#gradient)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient id="gradient" x2="1" y2="1">
          <stop offset="2.17%" stop-color="#f10f47" />
          <stop offset="100%" stop-color="#ff4775" />
        </linearGradient>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.17476 13.2174H8.82505C6.42167 13.2174 4.47358 11.2927 4.47358 8.92033V4.29706C4.47358 1.92373 6.42167 0 8.82505 0H9.17476C11.5781 0 13.5272 1.92373 13.5272 4.29706V8.92033C13.5272 11.2927 11.5781 13.2174 9.17476 13.2174ZM15.5626 8.78279C15.5626 8.25379 15.9966 7.82619 16.5313 7.82619C17.066 7.82619 17.5 8.25379 17.5 8.78279C17.5 13.0866 14.2006 16.6403 9.9692 17.1177V19.0433C9.9692 19.5714 9.53521 19.9999 9.00048 19.9999C8.46478 19.9999 8.03177 19.5714 8.03177 19.0433V17.1177C3.79945 16.6403 0.5 13.0866 0.5 8.78279C0.5 8.25379 0.933985 7.82619 1.46872 7.82619C2.00345 7.82619 2.43743 8.25379 2.43743 8.78279C2.43743 12.3557 5.38136 15.2628 9.00048 15.2628C12.6186 15.2628 15.5626 12.3557 15.5626 8.78279Z"
          fill="url(#gradient)"
        />
      </svg>

      <p
        class="text-[18px] text-white h-[16px] leading-[90%] font-semibold"
      >
        {{ time }}
      </p>
    </div>
    <div
      class="flex items-center text-negativeColor justify-center h-[36px] w-[190px] pl-2"
    >
      <p class="font-light text-[16px] leading-[90%] h-[14px]">
        Glissez pour annuler
      </p>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="rotate-90"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 22C6.48 22 2 17.51 2 12C2 6.48 6.48 2 12 2C17.51 2 22 6.48 22 12C22 17.51 17.51 22 12 22ZM16 10.02C15.7 9.73 15.23 9.73 14.94 10.03L12 12.98L9.06 10.03C8.77 9.73 8.29 9.73 8 10.02C7.7 10.32 7.7 10.79 8 11.08L11.47 14.57C11.61 14.71 11.8 14.79 12 14.79C12.2 14.79 12.39 14.71 12.53 14.57L16 11.08C16.15 10.94 16.22 10.75 16.22 10.56C16.22 10.36 16.15 10.17 16 10.02Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div
      class="flex m-2 items-center rounded-[10px] bg-bgComment justify-center w-[33px] h-[36px]"
    >
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.17476 13.2174H8.82505C6.42167 13.2174 4.47358 11.2927 4.47358 8.92033V4.29706C4.47358 1.92373 6.42167 0 8.82505 0H9.17476C11.5781 0 13.5272 1.92373 13.5272 4.29706V8.92033C13.5272 11.2927 11.5781 13.2174 9.17476 13.2174ZM15.5626 8.78279C15.5626 8.25379 15.9966 7.82619 16.5313 7.82619C17.066 7.82619 17.5 8.25379 17.5 8.78279C17.5 13.0866 14.2006 16.6403 9.9692 17.1177V19.0433C9.9692 19.5714 9.53521 19.9999 9.00048 19.9999C8.46478 19.9999 8.03177 19.5714 8.03177 19.0433V17.1177C3.79945 16.6403 0.5 13.0866 0.5 8.78279C0.5 8.25379 0.933985 7.82619 1.46872 7.82619C2.00345 7.82619 2.43743 8.25379 2.43743 8.78279C2.43743 12.3557 5.38136 15.2628 9.00048 15.2628C12.6186 15.2628 15.5626 12.3557 15.5626 8.78279Z"
          fill="#0036FF"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      time: '10:30'
    }
  },
})
</script>
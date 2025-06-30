<template>
  <div>
    <div class="flex min-h-[33.27px] items-center justify-between w-full mb-3">
      <p class="text-[16.5904px] leading-[120%] font-normal">
        <span class="font-bold block mb-1">{{ profil.name }}</span>
        <small class="text-[14px] text-username-profile">@{{ profil.username }}</small>
      </p>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.23368 17.2495L15.5222 7.8241C15.9183 7.31583 16.0591 6.72819 15.9271 6.12985C15.8126 5.58591 15.4781 5.06872 14.9764 4.67636L13.7529 3.7044C12.6878 2.85727 11.3674 2.94644 10.6104 3.91841L9.79173 4.98044C9.6861 5.1133 9.7125 5.30948 9.84454 5.41648C9.84454 5.41648 11.9131 7.07507 11.9571 7.11073C12.098 7.24449 12.2036 7.42283 12.23 7.63684C12.274 8.05595 11.9836 8.4483 11.5522 8.5018C11.3498 8.52855 11.1561 8.46614 11.0153 8.35021L8.84106 6.62029C8.73543 6.54093 8.57698 6.55787 8.48896 6.66488L3.32188 13.3527C2.98739 13.7718 2.87295 14.3158 2.98739 14.8419L3.64757 17.7043C3.68278 17.8559 3.81482 17.9629 3.97327 17.9629L6.8781 17.9272C7.40625 17.9183 7.89919 17.6775 8.23368 17.2495ZM12.3011 16.3581H17.0377C17.4999 16.3581 17.8757 16.7389 17.8757 17.2071C17.8757 17.6761 17.4999 18.056 17.0377 18.056H12.3011C11.839 18.056 11.4631 17.6761 11.4631 17.2071C11.4631 16.7389 11.839 16.3581 12.3011 16.3581Z"
          fill="white"
        />
      </svg>
    </div>

    <div class="flex pt-[10px] items-center space-x-1">
      <p class="font-sofia text-[16px] pr-[2px] leading-[120%] font-normal">
        Hello 👋 !
        I am a software engineer with a passion for web and mobile development.🤓
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ProfileName',
  props: {
    profil: {
      type: Object,
      default() {
        return {
        name: '',
        username: '',
        tel: '',
        energie: 0,
        stat: 0,
        email: '',
        categories: [],
        interests: [],
        description: '',
      }
      }
    }
  }
})
</script>
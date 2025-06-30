<template>
  <div class="fixed top-0 z-50 w-full h-[76px] bg-background">
    <div class="relative flex items-center justify-between w-full h-full">
      <!-- category -->
      <button
        @click="goBackAction()"
        class="flex ml-[18px] items-center py-[8px] px-[12px] justify-center w-[48px] h-[40px] text-white"
      >
        <!-- selected text -->
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="-rotate-90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.90902 1.33341C12.589 1.33341 15.5757 4.32675 15.5757 8.00008C15.5757 11.6801 12.589 14.6667 8.90902 14.6667C5.23568 14.6667 2.24235 11.6801 2.24235 8.00008C2.24235 4.32675 5.23568 1.33341 8.90902 1.33341ZM6.24235 9.32008C6.44235 9.51341 6.75568 9.51341 6.94902 9.31341L8.90902 7.34675L10.869 9.31341C11.0624 9.51341 11.3823 9.51341 11.5757 9.32008C11.7757 9.12008 11.7757 8.80675 11.5757 8.61341L9.26235 6.28675C9.16902 6.19341 9.04235 6.14008 8.90902 6.14008C8.77568 6.14008 8.64902 6.19341 8.55568 6.28675L6.24235 8.61341C6.14235 8.70675 6.09568 8.83342 6.09568 8.96008C6.09568 9.09341 6.14235 9.22008 6.24235 9.32008Z"
            fill="white"
          />
        </svg>
      </button>
      <!-- buttons -->
      <div class="flex items-center justify-end px-[17.52px] w-full">
        <nuxt-link
          to="/app/search"
          class="h-[44px] ml-[18px] w-[44px] flex items-center justify-center text-iconSearch"
        >
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.72607 12.6699C4.72607 7.88166 8.56641 4 13.3037 4C15.5786 4 17.7604 4.91344 19.369 6.53936C20.9776 8.16529 21.8814 10.3705 21.8814 12.6699C21.8814 17.4582 18.041 21.3399 13.3037 21.3399C8.56641 21.3399 4.72607 17.4582 4.72607 12.6699ZM21.7394 19.6544L24.2941 21.7165H24.3384C24.8553 22.2389 24.8553 23.0859 24.3384 23.6083C23.8216 24.1307 22.9836 24.1307 22.4668 23.6083L20.3468 21.1786C20.1463 20.9767 20.0337 20.7025 20.0337 20.4165C20.0337 20.1305 20.1463 19.8563 20.3468 19.6544C20.7333 19.2705 21.3529 19.2705 21.7394 19.6544Z"
              fill="#4256A4"
            />
          </svg>
        </nuxt-link>
        <nuxt-link
          to="/app/account"
          class="h-[32px] ml-[18px] w-[32px] relative rounded-full flex items-center justify-center"
        >
          <nuxt-img
            loading="lazy"
            alt="user-profile"
            quality="75"
            provider="imgix"
            class="absolute object-cover w-[32px] h-[32px] rounded-full"
            src="/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
          />
        </nuxt-link>
        <div class="flex items-center ml-[8px] space-x-[3px]">
          <p class="text-xs font-bold leading-md font-paralucent text-gradient">
            25
          </p>
          <div
            class="rounded-full h-[17.75px] w-[17.75px] active-bg flex justify-center items-center"
          >
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <mask
                id="mask0_3470_1382"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="15"
                height="14"
              >
                <rect
                  x="0.726074"
                  y="0.125"
                  width="13.75"
                  height="13.75"
                  fill="url(#pattern0)"
                />
              </mask>
              <g mask="url(#mask0_3470_1382)">
                <rect
                  x="0.726074"
                  y="0.125"
                  width="15.1615"
                  height="15.1615"
                  fill="#F7D618"
                />
              </g>
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlink:href="#image0_3470_1382" transform="scale(0.01)" />
                </pattern>
                <image
                  id="image0_3470_1382"
                  width="100"
                  height="100"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNBJREFUeAHtnbtrVEEUh3fFR6GYSiOiYEDr+CgklWtjbaX+BWIlGBGMUQw+UKOCNmIjpNEiKFipiI9WfEVbX1hpFCsfRRSzfoe4ZJPsTnaz2ZlzZmZg2Hvv3HvnnN835z5O7r0pFHLJCmQFsgJZgaxAViArkBWYfwWK87/LsHssl8ubsKCTOlIsFr+EtSbh3gHRQX1ArZQxJg4mLElY1xF/qEKi6nec6VJYyxLsHdG7qX+rQFRPXrIkyQJLxjpsHaStni+rHdupa6rnhDpD6xlEKJRo21Gv3dpy00CAIVeJF6yJ7rLXNBAc203d4nLQWptZIETHIsQ+aU3w2ew1CwTH9lLXz+agtXaTQIiOZQh91JrYjdhrEgiOyR34qkYctLaOOSBExwpE7rUmdKP2mgOCY8eoyxt10Np6poAQHV0ILCfzaIspIFA4TV0SLQ0cMwOE6OjGXrkRjLqYAQIFVwIxGkgmgBAdJRSPJoHoGj3qgQBDEohnXU7E1KYeCGLLeWNrTKK7fFENhOiIMoFoFgiGR5lANAmE6Ig2gWgSCEZHm0A0B4ToiDqBaA4IBkedQDQFhOhYh8FRJxBNAcHY6BOIZoAQHZJA3OMyOPY2bTeGSSQQXYNKDRCio4ShSSQQ1QMBRlIJRPVAMHAXNZkEomogREdyCUTVQDBO7jk2uIxMqS3oSZ3oSDKB6BpgC12NHtoO0Ee7n0DsAfzwHHz5zDa3eXH08Ry2nfMmcnUTpCCSJBDfUTU/9FbGvkNAuehLpJBALuPkfl+OttDPb7ZdC5SvLeyj4U2DnEOIji4s3NewlWFXXEz38u67lxIECJ7JizbiqJUy6stQ74csomMjzr2ghhoMzWr7lMOVt5vWEKKcMwRD4PU1S7CV9b0CITq2YaylBOIdouNRKwI3u63XQxZAnmCgt/BvVoxp648zvxkgr6ctb+ustwj5f+6wAkNEv+EbhnTqDQh9dUqHRsoYdsqDFt6LTyCv8E5usiyUq0THxxCGegOCg/IxsSNUSUdoLt8x7lQoA70mF4FykXOJ3IPspM7lKz09bLemzWKdx85vbe4jjt0Dc5jazvKJnS8NqZa3Q1ZIJ5vo+wTR8auJ9ed91QxkUtI3TF6bnA0zlYFM6t5PdPyZnA0zlYFM6P6Mn1thEEztNQOZ0KOP6FBxOZ6BFAp3gfFw6jgNN5c6EEkg9oeTf2bPqQO5TnSMzJQl3JKUgUhebSCc9LV7ThnIFaLjQ21Zwi1NFcgPJD8TTvb6PacKZJDo8PKcVX3pa7ekCERAyEN6KkuKQI4THXLIUllSA/IWCsETiK6RkBoQFQnEDGRCAUkg3nSJoaEtpQhRk0B0gU8FyD1O5GoSiKkDUZdATB2IPIH40iWCprbYD1kqE4iuARA7EEkgvncJoK0tZiA/EVtlAtE1CGIGojaBmCIQSSCa+g+fFUixRsiA5gRiRfxavzECkb8Cqk4g1gJRWRYjkMNEh1zumiyxAXkOBfUJRNdIiQ2IRIeKJxBdorvaYgJiJoEYExD5ZFKtIlGh6gnEWkZGt4y3m7ZTx2u8QjUUnbNWHAJGL3WsCsp9pjus2D+bnV6/5DCbMY22A2Al68onk0Y5iXv90kKjNub1sgJZgaxAViArkBXICmQFNCnwD4PKp2cwdfH0AAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div v-if="isLoading" class="absolute bottom-0 w-full">
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
  name: "AppNavPage",
  computed: {
    ...mapGetters("player", ["playerPourcentage", "isLoading"]),
  },
  methods: {
    goBackAction() {
      this.$router.back();
    },
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

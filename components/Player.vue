<template>
  <div
    v-if="isMiniatureActive"
    class="fixed text-white bottom-[80px] flex z-50 w-full justify-between items-start h-[66.58px] px-[9px] py-[10px] back"
  >
    <div class="flex items-start gap-[8.98px] w-[260.33px] h-[45.63px]">
      <nuxt-img
        loading="lazy"
        alt="back"
        sizes="sm:355px md:320px lg:480px"
        provider="imgix"
        class="h-[45.63px] w-[45.63px] object-cover rounded-[2.99231px]"
        :src="currentPlaying.url"
      />
      <div
        class="w-[205.72px] h-[45.63px] flex flex-col items-start gap-[2.99px]"
      >
        <p
          class="h-[18px] overflow-hidden text-ellipsis w-full text-[15px] leading-md font-semibold font-paralucent"
        >
          {{ currentPlaying.title }}
        </p>
        <p
          class="h-[12px] overflow-hidden text-ellipsis w-full text-[10.2626px] leading-md font-semibold font-paralucent"
        >
          {{ currentPlaying.username }}
        </p>
      </div>
    </div>
    <div
      class="sefl-end w-[101.74px] alignce h-[45.63px] flex justify-start items-center gap-[14.96px]"
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
          id="mask0_3470_1382jgq"
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
            fill="url(#pattern0xxxxvvbbm9)"
          />
        </mask>
        <g mask="url(#mask0_3470_1382jgq)">
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
            id="pattern0xxxxvvbbm9"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlink:href="#image0_3470_13820007" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_3470_13820007"
            width="100"
            height="100"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNBJREFUeAHtnbtrVEEUh3fFR6GYSiOiYEDr+CgklWtjbaX+BWIlGBGMUQw+UKOCNmIjpNEiKFipiI9WfEVbX1hpFCsfRRSzfoe4ZJPsTnaz2ZlzZmZg2Hvv3HvnnN835z5O7r0pFHLJCmQFsgJZgaxAViArkBWYfwWK87/LsHssl8ubsKCTOlIsFr+EtSbh3gHRQX1ArZQxJg4mLElY1xF/qEKi6nec6VJYyxLsHdG7qX+rQFRPXrIkyQJLxjpsHaStni+rHdupa6rnhDpD6xlEKJRo21Gv3dpy00CAIVeJF6yJ7rLXNBAc203d4nLQWptZIETHIsQ+aU3w2ew1CwTH9lLXz+agtXaTQIiOZQh91JrYjdhrEgiOyR34qkYctLaOOSBExwpE7rUmdKP2mgOCY8eoyxt10Np6poAQHV0ILCfzaIspIFA4TV0SLQ0cMwOE6OjGXrkRjLqYAQIFVwIxGkgmgBAdJRSPJoHoGj3qgQBDEohnXU7E1KYeCGLLeWNrTKK7fFENhOiIMoFoFgiGR5lANAmE6Ig2gWgSCEZHm0A0B4ToiDqBaA4IBkedQDQFhOhYh8FRJxBNAcHY6BOIZoAQHZJA3OMyOPY2bTeGSSQQXYNKDRCio4ShSSQQ1QMBRlIJRPVAMHAXNZkEomogREdyCUTVQDBO7jk2uIxMqS3oSZ3oSDKB6BpgC12NHtoO0Ee7n0DsAfzwHHz5zDa3eXH08Ry2nfMmcnUTpCCSJBDfUTU/9FbGvkNAuehLpJBALuPkfl+OttDPb7ZdC5SvLeyj4U2DnEOIji4s3NewlWFXXEz38u67lxIECJ7JizbiqJUy6stQ74csomMjzr2ghhoMzWr7lMOVt5vWEKKcMwRD4PU1S7CV9b0CITq2YaylBOIdouNRKwI3u63XQxZAnmCgt/BvVoxp648zvxkgr6ctb+ustwj5f+6wAkNEv+EbhnTqDQh9dUqHRsoYdsqDFt6LTyCv8E5usiyUq0THxxCGegOCg/IxsSNUSUdoLt8x7lQoA70mF4FykXOJ3IPspM7lKz09bLemzWKdx85vbe4jjt0Dc5jazvKJnS8NqZa3Q1ZIJ5vo+wTR8auJ9ed91QxkUtI3TF6bnA0zlYFM6t5PdPyZnA0zlYFM6P6Mn1thEEztNQOZ0KOP6FBxOZ6BFAp3gfFw6jgNN5c6EEkg9oeTf2bPqQO5TnSMzJQl3JKUgUhebSCc9LV7ThnIFaLjQ21Zwi1NFcgPJD8TTvb6PacKZJDo8PKcVX3pa7ekCERAyEN6KkuKQI4THXLIUllSA/IWCsETiK6RkBoQFQnEDGRCAUkg3nSJoaEtpQhRk0B0gU8FyD1O5GoSiKkDUZdATB2IPIH40iWCprbYD1kqE4iuARA7EEkgvncJoK0tZiA/EVtlAtE1CGIGojaBmCIQSSCa+g+fFUixRsiA5gRiRfxavzECkb8Cqk4g1gJRWRYjkMNEh1zumiyxAXkOBfUJRNdIiQ2IRIeKJxBdorvaYgJiJoEYExD5ZFKtIlGh6gnEWkZGt4y3m7ZTx2u8QjUUnbNWHAJGL3WsCsp9pjus2D+bnV6/5DCbMY22A2Al68onk0Y5iXv90kKjNub1sgJZgaxAViArkBXICmQFNCnwD4PKp2cwdfH0AAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
      <button
        @click="pause()"
        class="flex items-center justify-center focus:outline-none focus:ring-0 ring-white"
      >
        <transition name="modal">
          <svg
            v-if="currentStatut"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.2617 19.6415H6.27197V5.67737H10.2617V19.6415ZM14.2518 19.6415V5.67738H18.2415V19.6415H14.2518Z"
              fill="white"
            />
          </svg>
          <svg
            v-else
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.692383 16.001C0.692383 7.30574 7.76325 0.238281 16.446 0.238281C25.1287 0.238281 32.1995 7.30574 32.1995 16.001C32.1995 24.678 25.1287 31.7454 16.446 31.7454C7.76325 31.7454 0.692383 24.678 0.692383 16.001ZM22.2244 17.5953C22.3917 17.4282 22.6046 17.1698 22.6502 17.109C22.8935 16.7898 23.0151 16.3946 23.0151 16.001C23.0151 15.5587 22.8783 15.1483 22.6198 14.814C22.5986 14.7928 22.5571 14.7476 22.503 14.6888C22.4019 14.5787 22.2567 14.4207 22.118 14.282C20.8711 12.9445 17.6169 10.7559 15.9138 10.0871C15.6553 9.98226 15.0015 9.75276 14.6517 9.73756C14.3172 9.73756 13.9979 9.81355 13.6937 9.96554C13.3136 10.1783 13.0095 10.5127 12.8422 10.9079C12.7358 11.1814 12.5685 12.0022 12.5685 12.0174C12.4012 12.9141 12.31 14.3732 12.31 15.9843C12.31 17.5209 12.4012 18.9176 12.5381 19.8296C12.5418 19.8333 12.5549 19.8986 12.5752 19.9999C12.637 20.3079 12.7657 20.9496 12.903 21.2127C13.2376 21.851 13.8914 22.2462 14.5909 22.2462H14.6517C15.1079 22.231 16.0659 21.8358 16.0659 21.8206C17.6778 21.1519 20.8558 19.0696 22.1332 17.6865L22.2244 17.5953Z"
              fill="currentColor"
            />
          </svg>
        </transition>
      </button>
      <button
        @click="closeMiniature()"
        class="flex items-center justify-center focus:outline-none focus:ring-0 ring-white"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.8575 2.7926H16.5275C19.9175 2.7926 22.1875 5.1726 22.1875 8.7126V16.8836C22.1875 20.4136 19.9175 22.7926 16.5275 22.7926H7.8575C4.4675 22.7926 2.1875 20.4136 2.1875 16.8836V8.7126C2.1875 5.1726 4.4675 2.7926 7.8575 2.7926ZM15.1975 15.7926C15.5375 15.4536 15.5375 14.9036 15.1975 14.5636L13.4175 12.7836L15.1975 11.0026C15.5375 10.6636 15.5375 10.1036 15.1975 9.7636C14.8575 9.4226 14.3075 9.4226 13.9575 9.7636L12.1875 11.5426L10.4075 9.7636C10.0575 9.4226 9.5075 9.4226 9.1675 9.7636C8.8275 10.1036 8.8275 10.6636 9.1675 11.0026L10.9475 12.7836L9.1675 14.5536C8.8275 14.9036 8.8275 15.4536 9.1675 15.7926C9.3375 15.9626 9.5675 16.0536 9.7875 16.0536C10.0175 16.0536 10.2375 15.9626 10.4075 15.7926L12.1875 14.0236L13.9675 15.7926C14.1375 15.9736 14.3575 16.0536 14.5775 16.0536C14.8075 16.0536 15.0275 15.9626 15.1975 15.7926Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";

export default Vue.extend({
  name: "AppNavPage",
  computed: {
    ...mapGetters("player", [
      "isMiniatureActive",
      "currentPlaying",
      "currentStatut",
    ]),
  },
  methods: {
    closeMiniature() {
      this.$store.commit("player/SET_STATUT");
      this.$store.commit("player/SET_MINIATURE", false);
    },
    pause() {
      this.$store.commit("player/SET_STATUT");
    },
  },
});
</script>
<style scoped>
.back {
  background: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
  box-shadow: 0px 0px 2.99231px rgba(18, 18, 18, 0.48);
}
</style>

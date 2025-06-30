<template>
  <div class="fixed bottom-0 z-50 w-full h-[76px] bg-background">
    <div
      class="relative flex items-center justify-center space-x-[34px] w-full h-full px-6 py-3 text-white"
    >
      <!-- category -->
      <nuxt-link
        @click.native="setMenu('home')"
        to="/app"
        class="w-full h-full"
        :class="{ 'ustate-active': selectedMenu === 'home' }"
      >
        <div
          class="flex flex-col items-center justify-center w-full h-full space-y-1 text-justify font-paralucent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 transition-all duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <linearGradient id="gradient-nav" x2="1" y2="1">
              <stop offset="2.17%" stop-color="#f10f47" />
              <stop offset="100%" stop-color="#ff4775" />
            </linearGradient>
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            />
          </svg>
          <p
            v-if="selectedMenu === 'home'"
            :class="{ '!active-p': selectedMenu === 'home' }"
            class="font-bold text-[9.67742px] leading-xs transition-all duration-300"
          >
            Acceuil
          </p>
        </div>
      </nuxt-link>
      <nuxt-link
        @click.native="setMenu('discover')"
        :class="{ 'ustate-active': selectedMenu === 'discover' }"
        class="w-full h-full"
        to="/app/discover"
      >
        <div
          class="flex flex-col items-center justify-center w-full h-full space-y-1 text-justify font-paralucent"
        >
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            :class="{
              'ustate-active': selectedMenu === 'discover',
            }"
          >
            <mask
              id="mask0_3195_466"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="23"
              height="22"
            >
              <rect
                x="0.5"
                width="22"
                height="22"
                fill="url(#patterndiscover)"
              />
            </mask>
            <g mask="url(#mask0_3195_466)">
              <rect x="0.5" width="22" height="22" />
            </g>
            <defs>
              <pattern
                id="patterndiscover"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlink:href="#image0_3195_466" transform="scale(0.01)" />
              </pattern>
              <image
                id="image0_3195_466"
                width="100"
                height="100"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <p
            v-if="selectedMenu === 'discover'"
            class="font-bold text-[9.67742px] leading-xs transition-all duration-300"
          >
            Bibliothèque
          </p>
        </div>
      </nuxt-link>
      <nuxt-link
        @click.native="setMenu('')"
        class="w-full h-full -mt-[25%]"
        to="/app/podcasting"
      >
        <div
          class="flex flex-col items-center min-w-[64px] min-h-[64px] h-[64px] w-[64px] justify-center space-y-1 text-justify font-paralucent"
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_ii_3195_490)">
              <rect
                width="64"
                height="64"
                rx="32"
                fill="url(#paint0_linear_3195_490)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.2328 36.2898H31.7666C28.5621 36.2898 25.9646 33.7236 25.9646 30.5604V24.396C25.9646 21.2316 28.5621 18.6666 31.7666 18.6666H32.2328C35.4374 18.6666 38.0361 21.2316 38.0361 24.396V30.5604C38.0361 33.7236 35.4374 36.2898 32.2328 36.2898ZM40.7499 30.3771C40.7499 29.6718 41.3286 29.1016 42.0415 29.1016C42.7545 29.1016 43.3332 29.6718 43.3332 30.3771C43.3332 36.1155 38.9339 40.8538 33.2921 41.4903V44.0578C33.2921 44.7619 32.7135 45.3333 32.0005 45.3333C31.2862 45.3333 30.7089 44.7619 30.7089 44.0578V41.4903C25.0658 40.8538 20.6665 36.1155 20.6665 30.3771C20.6665 29.6718 21.2452 29.1016 21.9581 29.1016C22.6711 29.1016 23.2497 29.6718 23.2497 30.3771C23.2497 35.141 27.175 39.0172 32.0005 39.0172C36.8247 39.0172 40.7499 35.141 40.7499 30.3771Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_ii_3195_490"
                x="-3"
                y="-3"
                width="70"
                height="70"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-3" dy="-3" />
                <feGaussianBlur stdDeviation="5.04605" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_3195_490"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="3" dy="3" />
                <feGaussianBlur stdDeviation="5.04605" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.998631 0 0 0 0 0.409066 0 0 0 0 0.555054 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_3195_490"
                  result="effect2_innerShadow_3195_490"
                />
              </filter>
              <linearGradient
                id="paint0_linear_3195_490"
                x1="5.22357e-07"
                y1="4.65454"
                x2="75.5669"
                y2="36.8567"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F10F47" />
                <stop offset="1" stop-color="#FF4775" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </nuxt-link>
      <nuxt-link
        @click.native="setMenu('notification')"
        :class="{ 'ustate-active': selectedMenu === 'notification' }"
        class="w-full h-full"
        to="/app/notification"
      >
        <div
          class="flex flex-col items-center justify-center w-full h-full space-y-1 text-justify font-paralucent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 transition-all duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
            :class="{
              'ustate-active': selectedMenu === 'notification',
            }"
          >
            <path
              d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
            />
          </svg>
          <p
            v-if="selectedMenu === 'notification'"
            class="font-bold text-[9.67742px] leading-xs transition-all duration-300"
          >
            Notification
          </p>
        </div>
      </nuxt-link>
      <nuxt-link
        class="w-full h-full"
        to="/app/settings"
        @click.native="setMenu('settings')"
        :class="{ 'ustate-active': selectedMenu === 'settings' }"
      >
        <div
          class="flex flex-col items-center justify-center w-full h-full space-y-1 text-justify font-paralucent"
          :class="{ '!active-p': selectedMenu === 'settings' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 transition-all duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
            :class="{
              'ustate-active': selectedMenu === 'settings',
            }"
          >
            <path
              d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <p
            v-if="selectedMenu === 'settings'"
            class="font-bold text-[9.67742px] leading-xs transition-all duration-300"
          >
            Réglages
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "AppNavPage",
  computed: {
    ...mapState({
      player: (state: any) => state.player,
    }),
  },
  data() {
    return {
      selectedMenu: "home",
    };
  },
  mounted() {
    if (localStorage.getItem("menu"))
      this.selectedMenu = localStorage.getItem("menu") ?? "home";
  },
  methods: {
    setMenu(menu: string) {
      localStorage.setItem("menu", menu.toLowerCase());
      this.selectedMenu = menu.toLowerCase();
    },
  },
});
</script>
<style scoped>
.negative-bg {
  transform: matrix(1, 0, 0, -1, 0, 0);
}

a.state-active.nuxt-link-active > div > svg,
a.state-active.nuxt-link-active > div > svg > g {
  fill: url("#gradient-nav");
}

.ustate-active > div > svg,
.ustate-active > div > svg > g {
  fill: url("#gradient-nav");
}

.ustate-active > div > p {
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
}

.active-p {
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
}

.active-g {
  fill: url("#gradient-nav");
}

a.nuxt-link-exact-active > div > p {
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
}
a.nuxt-link-exact-active > div > svg,
a:hover > div > svg > g {
  fill: url("#gradient-nav");
}
a,
a:visited {
  text-decoration: none;
  color: inherit;
}
a:hover > div > p {
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
}
a:hover > div > svg,
a:hover > div > svg > g {
  fill: url("#gradient-nav");
}
</style>

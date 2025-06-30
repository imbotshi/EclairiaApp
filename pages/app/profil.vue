<template>
  <div class="relative h-screen pt-[155px] pb-[40px] bg-background">
    <profil-bar />
    <div class="flex flex-col text-white font-paralucent">
      <div class="flex flex-col">
        <!-- background -->
        <div class="h-[138px] relative w-full">
          <nuxt-img
            provider="imgix"
            alt="image"
            src="/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
            class="absolute w-full h-[138px] object-cover"
          />
        </div>
        <div
          class="flex px-[29px] pb-[23px] pt-[8px] items-center justify-between space-x-[8px]"
        >
          <div class="flex items-center space-x-[8px]">
            <div class="h-[64px] -mt-[40px] w-[64px] relative rounded-full">
              <nuxt-img
                alt="image"
                provider="imgix"
                sizes="sm:355px md:320px lg:480px"
                src="/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
                class="h-[64px] w-[64px] relative rounded-full object-cover"
              />
            </div>
            <div class="flex flex-col items-start">
              <p
                class="overflow-hidden font-bold capitalize text-body text-ellipsis leading-md"
              >
                {{ profil.name }}
              </p>
              <p
                class="overflow-hidden font-normal font-sofia text-[14px] text-ellipsis leading-md"
              >
                {{ profil.username }}
              </p>
            </div>
          </div>

          <div
            class="bg-primary shaddow-custom rounded-input w-[104px] h-[35px] py-[8px] px-[24px] flex justify-center items-center text-white"
          >
            <p
              class="font-bold capitalize font-paralucent text-body leading-md tracking-[-0.5px]"
            >
              épingle
            </p>
          </div>
        </div>
        <div class="flex px-[29px] flex-col space-y-[14px]">
          <div class="flex">
            <p
              class="font-normal font-sofia text-[13.4737px] leading-md text-justify"
            >
              {{ profil.description }}
            </p>
          </div>
          <div class="flex">
            <p
              class="font-light text-[#6A6A6A] font-sofia text-[16px] leading-md text-justify"
            >
              {{ profil.email }}
            </p>
          </div>
          <div class="flex gap-3">
            <p
              v-for="category in profil.categories"
              :key="category"
              class="font-normal font-sofia text-[16px] leading-md text-justify"
            >
              {{ category }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col space-y-[30.15px] pl-[20.1px] pr-[25.69px] pt-[52.77px]"
      >
        <div class="flex">
          <p class="font-bold text-[22.6137px] capitalize leading-input">
            épisodes
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProfilBar from "~/components/ProfilBar.vue";
import { mapActions, mapState } from "vuex"
import CreateEpisodePayload from "~/types/store/payload/CreateEpisodePayload";
import UserState from "~/types/store/state/UserState";

export default Vue.extend({
  components: { ProfilBar },
  name: "ProfilPage",
  layout: "app",
  head() {
    return {
      title: "Profil - Eclairia",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "ProfilPage",
          name: "ProfilPage",
          content: "Profil",
        },
      ],
    };
  },
  data() {
    return {
      profil: {
        name: "Musala Ya Internet",
        username: "@Imbotshi",
        email: "bevangelistaesli@gmail.com",
        categories: ["Technologie", "Education"],
        description:
          "I dedicate my life to make an aspiration of others come into fruition. I am UX Researcher for the audio digital. Homo numericus",
      },
      results: [
        {
          title: "Musala Ya Internet",
          description:
            "Episode 1 : La place de la femme dans le code avec Tchepda Flavie",
          id: "",
          active: true,
        },
        {
          title: "Musala Ya Internet",
          description:
            "Episode 2 : Ameliorer l’expérience utilisateur avec John Doe",
          id: "",
          active: false,
        },
      ] as Array<{
        title: string;
        description: string;
        id: string;
        active: boolean;
      }>,
      recentRadios: [
        {
          name: "Bolingo Ya Mayi",
          url: "/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
        },
        {
          name: "Radio Surplus",
          url: "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
        },
        {
          name: "Podcast KalibXu",
          url: "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
        },
      ] as Array<{ name: string; url: string }>,
      password: "",
      loading: false,
      errors: {
        username: "" as string | null,
        password: "" as string | null,
        message: "" as string | null,
      },
    };
  },

  computed: {
    ...mapState({
      user(state: any) {
        return state.user.user
      }
    })
  },
  mounted() {
      this.loadUser();
  },

  methods: {
    ...mapActions({
        loadUser: 'user/loadUser'
    })
  }

});
</script>

<style scoped>
.bg-active {
  background: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
}
</style>

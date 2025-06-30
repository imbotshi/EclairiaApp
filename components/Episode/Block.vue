<template>
  <div class="flex flex-col h-screen max-h-screen min-h-screen">
    <div
      class="relative rounded-[34px] w-[201.75px] h-[259.39px] self-center"
    >
      <img
        provider="imgix"
        alt="img bg"
        sizes="sm:355px md:320px lg:480px"
        :src="require('@/assets/img/microphone.jpg')"
        class="absolute border-4 border-[#ff4775] w-[201.75px] h-[259.39px] object-cover rounded-[34px]"
      />
    </div>
    <!-- content -->
    <div class="flex relative flex-col pt-[32px] space-y-[32px]">
      <!-- button -->

      <div class="pr-[90px] pl-4 text-white flex items-start flex-col">
        <div class="flex items-start space-x-3">
          <nuxt-link
            to="/app/profil"
            class="h-[40px] w-[40px] relative rounded-full flex items-center justify-center"
          >
            <nuxt-img
              loading="lazy"
              alt="user-profile"
              provider="imgix"
              sizes="sm:355px md:320px lg:480px"
              class="absolute h-[40px] w-[40px] object-cover rounded-full"
              src="/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
            />
          </nuxt-link>
          <div class="flex flex-col pr-2 w-[251px] space-y-1">
            <div class="flex items-center space-x-[8px]">
              <p
                class="font-bold font-paralucent capitalize text-[17.5931px] leading-md text-ellipsis"
              >
                {{ episode.description }} <!-- Here must have the title -->
              </p>
              <p
                class="font-medium font-sofia capitalize text-[12px] leading-md text-ellipsis max-w-[200px]"
              >
                imbotsi
              </p>
            </div>
            <p
              class="font-sofia font-normal text-[11.7287px] leading-[124%] tracking-[-0.247459px] text-[#F5F5F5] text-justify"
            >
              {{ episode.description }}
            </p>
            <div class="flex items-center justify-between p-[8px]">
              <p
                class="font-sofia text-[10px] leading-[90%] text-right font-normal"
              >
                Il y a 2j
              </p>
            </div>
          </div>
        </div>

        <PodcastAudioPlayer :file="'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'" />

        <div class="pt-[7px] flex flex-col space-y-[17px] mt-3">
          <!-- button more comment -->
          <div
            class="bg-bgComment border-[0.820455px] gap-[9.85px] border-[#0036FF] w-[275.33px] h-[38px] rounded-[11.4px] flex justify-center items-center py-[7.6px] px-[11.4px]"
          >
            <svg
              width="15"
              height="24"
              viewBox="0 0 15 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.32054 4.3563C7.18717 4.42825 7.10401 4.56508 7.10401 4.7139V7.03122H2.52841C2.29737 7.03122 2.10986 7.21438 2.10986 7.44006C2.10986 7.66575 2.29737 7.84891 2.52841 7.84891H7.10401V10.1662C7.10401 10.3156 7.18717 10.4524 7.32054 10.5238C7.45392 10.5963 7.61688 10.5914 7.74579 10.5124L12.1746 7.78622C12.2963 7.71099 12.3699 7.58071 12.3699 7.44006C12.3699 7.29942 12.2963 7.16914 12.1746 7.09391L7.74579 4.36774C7.67771 4.32631 7.60014 4.30505 7.52257 4.30505C7.45336 4.30505 7.38361 4.3225 7.32054 4.3563Z"
                fill="#0036FF"
              />
              <path
                d="M7.15926 19.6436C7.29264 19.5717 7.37579 19.4348 7.37579 19.286V16.9687H11.9514C12.1824 16.9687 12.3699 16.7855 12.3699 16.5598C12.3699 16.3342 12.1824 16.151 11.9514 16.151H7.37579V13.8337C7.37579 13.6843 7.29264 13.5475 7.15926 13.4761C7.02589 13.4036 6.86293 13.4085 6.73402 13.4875L2.30519 16.2137C2.18353 16.2889 2.10986 16.4192 2.10986 16.5598C2.10986 16.7005 2.18353 16.8308 2.30519 16.906L6.73402 19.6322C6.8021 19.6736 6.87967 19.6949 6.95724 19.6949C7.02644 19.6949 7.0962 19.6774 7.15926 19.6436Z"
                fill="#0036FF"
              />
            </svg>
            <p
              class="text-[#0036FF] text-[13.3px] leading-[112%] font-sofia font-medium"
            >
              Voir les commentaires les plus récents
            </p>
          </div>

          <!-- Comments -->
          <div class="flex flex-col space-y-1">
            <div class="flex items-start space-x-1">
              <nuxt-link
                to="/app/profil"
                class="h-[40px] w-[40px] relative rounded-full flex items-center justify-center"
              >
                <nuxt-img
                  loading="lazy"
                  alt="user-profile"
                  quality="75"
                  provider="imgix"
                  sizes="sm:355px md:320px lg:480px"
                  class="absolute object-cover w-[32px] h-[32px] rounded-full"
                  src="/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&auto=format&fit=crop"
                />
              </nuxt-link>
              <div class="flex flex-col space-y-1">
                <p
                  class="font-normal font-sofia lowercase text-[12px] text-justify max-w-[200px]"
                >
                  j'aime cette emission
                </p>
                <p
                  class="font-paralucent font-bold text-[8.79655px] leading-lg text-justify"
                >
                  Williams.N. Son
                </p>
              </div>
            </div>
          </div>
          <!-- End comments -->

          <!-- eddit -->
          <form class="w-[291.33px]" @submit.prevent="addComment">
            <div class="flex items-center gap-[4.71px]">
              <label for="comment">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  class="text-[#4256A4]"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.38281 18.3239C3.38281 10.679 9.49176 3.78979 17.9224 3.78979C26.1644 3.78979 32.404 10.5482 32.404 18.2803C32.404 27.2478 25.0906 32.8144 17.8934 32.8144C15.5136 32.8144 12.8727 32.1749 10.7542 30.925C10.0141 30.4744 9.39019 30.1401 8.59211 30.4017L5.66097 31.2738C4.92093 31.5063 4.25345 30.925 4.47111 30.1401L5.44331 26.8845C5.60293 26.4339 5.57391 25.9543 5.34174 25.5764C4.09383 23.28 3.38281 20.7656 3.38281 18.3239ZM16.0071 18.3241C16.0071 19.356 16.8342 20.1844 17.8645 20.199C18.8947 20.199 19.7218 19.356 19.7218 18.3386C19.7218 17.3067 18.8947 16.4782 17.8645 16.4782C16.8487 16.4637 16.0071 17.3067 16.0071 18.3241ZM22.6966 18.3386C22.6966 19.356 23.5237 20.199 24.554 20.199C25.5842 20.199 26.4113 19.356 26.4113 18.3386C26.4113 17.3067 25.5842 16.4782 24.554 16.4782C23.5237 16.4782 22.6966 17.3067 22.6966 18.3386ZM11.175 20.1993C10.1593 20.1993 9.31768 19.3563 9.31768 18.3389C9.31768 17.307 10.1448 16.4785 11.175 16.4785C12.2053 16.4785 13.0324 17.307 13.0324 18.3389C13.0324 19.3563 12.2053 20.1847 11.175 20.1993Z"
                  />
                </svg>
              </label>
              <input
                type="text"
                class="rounded-[16px] bg-[#091133] focus:outline-none text-[#4256A4] placeholder:text-[#4256A4] w-full focus:ring-0 min-h-[44px] pl-[0px] pr-[8px] border-none leading-lg font-normal text-[12px] font-sofia"
                name="comment"
                id="comment"
                placeholder="Ajouter un comment"
                required
                v-model="comment"
                :disabled="loading"
              />
            </div>
          </form>
        </div>
        <!-- quick actions -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {mapState} from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'EpisodeBlock',
  props: {
    episode: {
      type: Object,
      default() {
        return {
          photo: {
            public_link: '/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop'
          }
        }
      }
    }
  },
  data() {
    return {
      comment: "",
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
    cover() {
      return this.episode.photo?.public_link
    }
  },
  methods: {
    async addComment(): Promise<any> {
      try {
        // TODO: this.$router.push("/app");
      } catch (error) {
        this.errors.message = "Verifier votre connexion internet";
      } finally {
        this.loading = false;
      }
    },
  }
})
</script>
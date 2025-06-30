<template>
  <div class="h-screen bg-background">
    <PodcastStepBar
      text="Publier"
      btn-icon="fa-send"
      :loading="loading"
      @onClick="nextStep()"
    />
    
    <div
      class="pt-[70px] flex flex-col h-screen justify-center items-center max-h-screen min-h-screen text-white font-paralucent"
    >
      <form
        class="pt-[24px] w-full px-[50px] font-sofia justify-center items-center max-w-[480px] flex flex-col"
        @submit.prevent="nextStep()"
      >
        <div class="flex items-center justify-center w-full">
          <input
            id="file"
            :accept="validExtensions"
            type="file"
            hidden
            @change="onChange"
          />
          <div
            v-if="previewImage"
            for="file"
            class="object-contain w-[291px] h-[291px] rounded-[50.0156px] items-center justify-center flex bg-center bg-cover"
            :style="{ 'background-image': `url(${previewImage})` }"
          />
          <label
            for="file"
            v-else
            class="p-[72.75px] bg-[#061446] w-[291px] h-[291px] rounded-[50.0156px] items-center justify-center flex"
          >
            <svg
              width="123"
              height="123"
              viewBox="0 0 123 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.2262 122.125H87.7677C108.321 122.125 122.125 107.708 122.125 86.2549V36.7451C122.125 15.2923 108.321 0.875 87.7738 0.875H35.2262C14.6787 0.875 0.875 15.2923 0.875 36.7451V86.2549C0.875 107.708 14.6787 122.125 35.2262 122.125ZM40.2742 55.4374C31.9162 55.4374 25.1249 48.6369 25.1249 40.2811C25.1249 31.9254 31.9162 25.1249 40.2742 25.1249C48.6261 25.1249 55.4235 31.9254 55.4235 40.2811C55.4235 48.6369 48.6261 55.4374 40.2742 55.4374ZM108.914 79.287C110.944 84.4924 109.889 90.7488 107.719 95.9041C105.146 102.035 100.22 106.678 94.0143 108.705C91.2587 109.606 88.3691 110 85.4855 110H34.3924C29.3081 110 24.809 108.78 21.1207 106.509C18.8102 105.082 18.4018 101.791 20.1148 99.658C22.9801 96.0918 25.8088 92.5131 28.6618 88.9032C34.0998 81.996 37.7636 79.994 41.836 81.7521C43.4881 82.4778 45.1463 83.5664 46.8532 84.7176C51.4011 87.8083 57.7229 92.0564 66.0505 87.4454C71.7492 84.2537 75.0545 78.7788 77.9328 74.0112L77.981 73.9315C78.1849 73.597 78.3871 73.2625 78.5887 72.929L78.5888 72.9288C79.5561 71.3283 80.5104 69.7492 81.59 68.2944C82.9434 66.4738 87.9606 60.7804 94.4593 64.8346C98.5987 67.3873 102.08 70.8408 105.805 74.5384C107.225 75.9523 108.237 77.5602 108.914 79.287Z"
                fill="white"
              />
            </svg>
          </label>
        </div>
        <div
          class="flex items-center w-[112px] h-[40px] mt-[30px] justify-center space-x-[32px]"
        >
          <label
            for="file"
            class="w-[40px] h-[40px] rounded-[8px] flex items-center justify-center bg-actionBack"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.8764 20.0279L18.6628 8.66544C19.1403 8.0527 19.3101 7.3443 19.1509 6.62299C19.013 5.96726 18.6097 5.34377 18.0049 4.87078L16.5299 3.69906C15.2459 2.67784 13.6541 2.78534 12.7415 3.95706L11.7546 5.23735C11.6273 5.39752 11.6591 5.63401 11.8183 5.76301C11.8183 5.76301 14.312 7.76246 14.3651 7.80546C14.5349 7.96671 14.6622 8.1817 14.6941 8.43969C14.7471 8.94493 14.3969 9.41792 13.877 9.48242C13.6329 9.51467 13.3994 9.43942 13.2297 9.29967L10.6086 7.21422C10.4813 7.11855 10.2902 7.13898 10.1841 7.26797L3.95514 15.3303C3.5519 15.8355 3.41395 16.4912 3.5519 17.1255L4.34777 20.5761C4.39021 20.7589 4.54939 20.8879 4.74039 20.8879L8.24222 20.8449C8.87891 20.8341 9.47316 20.5439 9.8764 20.0279ZM14.7797 18.9533H20.4898C21.0469 18.9533 21.5 19.4123 21.5 19.9766C21.5 20.5421 21.0469 21 20.4898 21H14.7797C14.2226 21 13.7695 20.5421 13.7695 19.9766C13.7695 19.4123 14.2226 18.9533 14.7797 18.9533Z"
                fill="white"
              />
            </svg>
          </label>
          <button
            @click="resetImage"
            class="w-[40px] focus:outline-none active:outline-none focus:ring-0 h-[40px] rounded-[8px] flex items-center justify-center bg-deleteBack"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7871 5.24297C21.1761 5.24297 21.5 5.56596 21.5 5.97696V6.35696C21.5 6.75795 21.1761 7.09095 20.7871 7.09095H4.21385C3.82386 7.09095 3.5 6.75795 3.5 6.35696V5.97696C3.5 5.56596 3.82386 5.24297 4.21385 5.24297H7.12957C7.72185 5.24297 8.2373 4.82197 8.37054 4.22798L8.52323 3.54598C8.76054 2.61699 9.5415 2 10.4353 2H14.5647C15.4488 2 16.2385 2.61699 16.467 3.49699L16.6304 4.22698C16.7627 4.82197 17.2781 5.24297 17.8714 5.24297H20.7871ZM19.3058 19.134C19.6102 16.2971 20.1432 9.55712 20.1432 9.48913C20.1626 9.28313 20.0955 9.08813 19.9623 8.93113C19.8193 8.78413 19.6384 8.69713 19.4391 8.69713H5.56852C5.36818 8.69713 5.17756 8.78413 5.04529 8.93113C4.91108 9.08813 4.84494 9.28313 4.85467 9.48913C4.85646 9.50162 4.87558 9.73903 4.90755 10.1359C5.04958 11.8992 5.44517 16.8102 5.70079 19.134C5.88168 20.846 7.00498 21.922 8.63206 21.961C9.88763 21.99 11.1811 22 12.5038 22C13.7496 22 15.0149 21.99 16.3094 21.961C17.9929 21.932 19.1152 20.875 19.3058 19.134Z"
                fill="url(#paint0_linear_3164_704_delere)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3164_704_delere"
                  x1="3.5"
                  y1="3.45455"
                  x2="25.3925"
                  y2="11.8509"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F10F47" />
                  <stop offset="1" stop-color="#FF4775" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
        <div
          class="flex flex-col mt-[30px] h-[84px] items-center justify-center space-y-[4px]"
        >
          <p
            v-for="tip in tips"
            :key="tip"
            class="font-light text-[13.8333px] leading-[150%] text-center"
          >
            {{ tip }}
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import DynamicBar from "~/components/DynamicBar.vue";

export default Vue.extend({
  components: { DynamicBar },
  name: "PodcastFormCover",
  head() {
    return {
      title: "Poadcasting - Eclairia",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "PoadcastingPage",
          name: "PoadcastingPage",
          content: "Poadcasting",
        },
      ],
    };
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      time: "0:01",
      previewImage: null as string | ArrayBuffer | null,
      validExtensions: [
        "image/jpg",
        "image/png",
        "image/jpeg",
        ".png",
        ".jpg",
        ".jpeg",
      ],
      tips: [
        "Taille idéale : 1400*1400px",
        "Taille min : 400*400px",
        "Format : JPG ou PNG",
        "Poids max : 10 Mo",
      ],
      file: null as any,
      fileName: null as string | null,
      item: {
        title: "Rythme et histoque",
        emission: "Roger Kalamu",
        description:
          "Episode 1 : La place de la femme dans le code avec Tchepda Flavie. #Internet #Web #UXdesign pour les nuls. Avec @flavie_flav",
        id: "2",
        langue: "Wolof",
        eclaire: 10,
        url: "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
        profil:
          "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
        active: false,
      } as {
        title: string;
        emission: string;
        description: string;
        id: string;
        eclaire: number;
        active: boolean;
        url: string;
        langue: string;
        profil: string;
      },
      emission: "",
      description: "",
      errors: {
        emission: "" as string | null,
        description: "" as string | null,
        message: "" as string | null,
      },
    };
  },
  computed: {
    ...mapGetters("player", [
      "currentPlaying",
      "isMiniatureActive",
      "currentStatut",
    ]),
  },
  methods: {
    resetImage() {
      this.previewImage = null;
    },
    async loadDocument(isInput: boolean, event: any) {
      try {
        const target = event.target;
        this.file = isInput
          ? target.files
            ? target.files[0]
            : null
          : event.dataTransfer.files[0];
        if (!this.file) return;
        const { type, name } = this.file;
        if (this.validExtensions.includes(type)) {
          const filesize = isInput
            ? (event.target.files[0].size / 1024 / 1024).toFixed(4)
            : (event.dataTransfer.files[0].size / 1024 / 1024).toFixed(4); // size in MB
          if (Number.parseFloat(filesize) < 301) {
            this.fileName = name.substring(0, name.indexOf("."));

            const reader = new FileReader();
            reader.onload = (e) => {
              this.previewImage = e.target ? e.target.result : null;
            };
            reader.readAsDataURL(this.file ? this.file : new Blob());
          } else {
            this.errors.message = "La taille du fichier est trop grande";
          }
          // this.uploadTask()
        } else {
          this.errors.message = "Le format du fichier n'est supporté";
          this.file = null;
        }
      } catch (error) {
        console.log(error);
        this.errors.message = "erreur de traitement";
      }
    },
    onChange(event: any) {
      this.loadDocument(true, event);
    },
    async addComment(): Promise<any> {
      try {
        // this.$router.push("/app");
      } catch (error) {
        this.errors.message = "Verifier votre connexion internet";
      } finally {
        // this.loading = false;
      }
    },
    setPlayer(item: any) {
      this.$store.commit("player/SET_SONG", item);
      if (!this.currentStatut) this.$store.commit("player/SET_STATUT");
      this.$store.commit("player/SET_MINIATURE", true);
    },
    async nextStep(): Promise<any> {
      try {
        this.$emit('submitted', this.file)
      } catch (error) {
        this.errors.message = "Verifier votre connexion internet";
      } finally {
        // this.loading = false;
      }
    },
  },
});
</script>
<style scoped>
.shaddow-custom {
  box-shadow: -5.7943px -5.7943px 17.3829px rgba(255, 239, 239, 0.03),
    5.7943px 5.7943px 17.3829px rgba(0, 0, 0, 0.3);
}

.file-input {
  background: linear-gradient(
    113.08deg,
    rgba(241, 15, 71, 0.08) 2.17%,
    rgba(255, 71, 117, 0.08) 100%
  );
}

.custom-back {
  border: 1.66506px solid rgba(3, 30, 122, 0.18);
  box-shadow: inset -3.33013px -3.33013px 9.99038px rgba(255, 239, 239, 0.02),
    inset 3.33013px 3.33013px 9.99038px rgba(0, 0, 0, 0.3);
  border-radius: 18.3157px;
}

.active-back {
  fill: url("#gradient");
}

.text-mask {
  background: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.red-svg {
  background: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
}
</style>

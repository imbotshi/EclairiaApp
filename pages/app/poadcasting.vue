<template>
  <div class="h-screen bg-background">
    <dynamic-bar :text="'suivant'" @onClick="nextStep()" />
    <div
      class="pt-[70px] flex flex-col h-screen justify-center items-center max-h-screen min-h-screen text-white font-paralucent"
    >
      <form
        class="pt-[24px] w-full px-[18px] font-sofia max-w-[480px] flex flex-col"
        @submit.prevent="nextStep()"
      >
        <div class="relative flex w-full">
          <input
            type="text"
            class="rounded-input w-full placeholder:text-white h-[44px] pl-[16px] pr-[8px] border-none leading-input font-light text-white focus:ring-0 text-sm font-sofia bg-input"
            name="emission"
            id="emission"
            placeholder="Nom de l'emission"
            v-model="emission"
            maxlength="25"
            required
            :disabled="loading"
            :class="{
              '!border-red-500 text-red-500': errors.emission,
              'text-textColor': !errors.emission,
              'opacity-50 cursor-progress': loading,
            }"
          />
          <FormInputSpinner />
        </div>
        <div class="flex items-center pt-[4px] justify-between">
          <p
            class="w-[174px] font-sofia h-[18px] text-mask font-light text-[12px] leading-[150%] text-right"
          >
            Ce nom d'emission est déjà pris.
          </p>
          <p
            class="font-light font-sofia text-[12px] leading-[150%] text-right"
          >
            {{ `${emission.length} / 25` }}
          </p>
        </div>
        <div class="flex items-start pt-[16px] space-x-[12px]">
          <nuxt-img
            loading="lazy"
            alt="profil"
            provider="imgix"
            sizes="sm:355px md:320px lg:480px"
            src="/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
            class="min-h-[32px] min-w-[32px] max-h-[32px] max-w-[32px] relative rounded-full object-cover"
          />
          <textarea
            type="text"
            class="rounded-input w-full placeholder:text-white min-h-[142px] max-h-[142px] pl-[16px] pr-[8px] border-none leading-input font-light text-white focus:ring-0 text-sm font-sofia bg-input"
            name="description"
            id="description"
            placeholder="Quoi de neuf ?"
            v-model="description"
            maxlength="250"
            required
            :disabled="loading"
            :class="{
              '!border-red-500 text-red-500': errors.description,
              'text-textColor': !errors.description,
              'opacity-50 cursor-progress': loading,
            }"
          />
        </div>
        <div class="flex items-center pt-[4px] justify-between">
          <p
            class="w-[174px] font-sofia h-[18px] text-mask font-light text-[12px] leading-[150%] text-right"
          >
            {{ errors.description }}
          </p>
          <p
            class="font-light font-sofia text-[12px] leading-[150%] text-right"
          >
            {{ `${description.length} / 250` }}
          </p>
        </div>
        <!-- dropdown -->
        <div
          class="flex bg-bgDropdown items-center justify-between mt-[16px] rounded-[16px] h-[44px] pr-[8px] pl-[16px]"
        >
          <p class="text-[18px] h-[16px] leading-[90%] font-semibold">
            Lingala
          </p>
          <div class="flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22C6.48 22 2 17.51 2 12C2 6.48 6.48 2 12 2C17.51 2 22 6.48 22 12C22 17.51 17.51 22 12 22ZM16 10.02C15.7 9.73 15.23 9.73 14.94 10.03L12 12.98L9.06 10.03C8.77 9.73 8.29 9.73 8 10.02C7.7 10.32 7.7 10.79 8 11.08L11.47 14.57C11.61 14.71 11.8 14.79 12 14.79C12.2 14.79 12.39 14.71 12.53 14.57L16 11.08C16.15 10.94 16.22 10.75 16.22 10.56C16.22 10.36 16.15 10.17 16 10.02Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <!-- dropdown -->
        <div
          class="flex bg-bgDropdown items-center justify-between mt-[16px] rounded-[16px] h-[44px] pr-[8px] pl-[16px]"
        >
          <p class="text-[18px] h-[16px] leading-[90%] font-semibold">
            Technology
          </p>
          <div class="flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22C6.48 22 2 17.51 2 12C2 6.48 6.48 2 12 2C17.51 2 22 6.48 22 12C22 17.51 17.51 22 12 22ZM16 10.02C15.7 9.73 15.23 9.73 14.94 10.03L12 12.98L9.06 10.03C8.77 9.73 8.29 9.73 8 10.02C7.7 10.32 7.7 10.79 8 11.08L11.47 14.57C11.61 14.71 11.8 14.79 12 14.79C12.2 14.79 12.39 14.71 12.53 14.57L16 11.08C16.15 10.94 16.22 10.75 16.22 10.56C16.22 10.36 16.15 10.17 16 10.02Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <!-- recorder -->
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
        <div class="pt-[16px] flex w-full">
          <input
            id="file"
            :accept="validExtensions"
            type="file"
            hidden
            @change="onChange"
          />
          <label
            for="file"
            class="pl-2 pr-4 border w-full border-[#ff4775] h-[44px] rounded-[16px] items-center file-input flex"
            ><svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5692 19.422H19.9673C20.5356 19.422 21.0069 18.96 21.0069 18.386C21.0069 17.798 20.5356 17.336 19.9673 17.336H17.5692V14.914C17.5692 14.34 17.1118 13.878 16.5435 13.878C15.9752 13.878 15.5039 14.34 15.5039 14.914V17.336H13.1197C12.5514 17.336 12.0801 17.798 12.0801 18.386C12.0801 18.96 12.5514 19.422 13.1197 19.422H15.5039V21.844C15.5039 22.418 15.9752 22.88 16.5435 22.88C17.1118 22.88 17.5692 22.418 17.5692 21.844V19.422ZM27.0732 12.8359C27.399 12.8321 27.7538 12.828 28.0761 12.828C28.4227 12.828 28.6999 13.108 28.6999 13.458V24.714C28.6999 28.186 25.9138 31 22.4623 31H11.4425C7.83852 31 4.8999 28.046 4.8999 24.406V9.314C4.8999 5.842 7.6999 3 11.1514 3H18.5534C18.9138 3 19.191 3.294 19.191 3.644V8.152C19.191 10.714 21.2841 12.814 23.8207 12.828C24.4132 12.828 24.9355 12.8324 25.3927 12.8363C25.7483 12.8393 26.0645 12.842 26.3435 12.842C26.5408 12.842 26.7966 12.839 27.0732 12.8359ZM27.4539 10.7927C26.3145 10.7969 24.9713 10.7927 24.0052 10.7829C22.4721 10.7829 21.2093 9.50749 21.2093 7.95909V4.26869C21.2093 3.66529 21.9343 3.36569 22.3487 3.80109C23.0986 4.58859 24.129 5.67096 25.1548 6.74851C26.1787 7.82415 27.1981 8.89497 27.9293 9.66289C28.3341 10.0871 28.0374 10.7913 27.4539 10.7927Z"
                fill="white"
              />
            </svg>
            <p
              class="h-[16px] w-[296.4px] text-center leading-[90%] text-[18px] font-semibold"
            >
              Importer un fichier audio
            </p>
          </label>
        </div>
        <div class="flex items-center pt-[4px] justify-center space-x-[16px]">
          <p
            class="font-light font-sofia max-w-[111px] text-[12px] leading-[150%] text-right"
          >
            Poids max. : 300 mo
          </p>
          <p
            class="font-light font-sofia max-w-[172px] text-[12px] leading-[150%] text-right"
          >
            Fichier .mp3, .wav, .ogg ou .flac
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
  name: "EcouteIndexPage",
  layout: "noBottomLayout",
  middleware: ['auth'],
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
  data() {
    return {
      time: "0:01",
      validExtensions: [".mp3", ".wav", ".ogg", ".flac"],
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
      loading: false,
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

            const fileReader = await new FileReader();
            fileReader.readAsArrayBuffer(this.file);
            fileReader.onload = (e: any) => {
              const bufferArray = e?.target.result;
            };
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
        this.loading = false;
      }
    },
    setPlayer(item: any) {
      this.$store.commit("player/SET_SONG", item);
      if (!this.currentStatut) this.$store.commit("player/SET_STATUT");
      this.$store.commit("player/SET_MINIATURE", true);
    },
    async nextStep(): Promise<any> {
      try {
        this.$router.push("/app/postaudio");
      } catch (error) {
        this.errors.message = "Verifier votre connexion internet";
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>
<style scoped>
.file-input {
  background: linear-gradient(
    113.08deg,
    rgba(241, 15, 71, 0.08) 2.17%,
    rgba(255, 71, 117, 0.08) 100%
  );
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

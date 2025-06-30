<template>
  <div>
    <div
      v-if="!toNextStep"
      class="h-screen bg-background"
    >
      <PodcastStepBar
        text="Suivant"
        btn-icon="fa-chevron-right"
        :progressPercent="0.5"
        @onClick="nextStep()"
      />

      <div
        class="pt-[30px] mt-[80px] flex flex-col h-screen justify-center items-center max-h-screen min-h-screen text-white font-paralucent"
      >
        <!-- Loader -->
        <UtilsCardLoader v-if="loading" />
        <!-- End loader -->

        <form
          class="pt-[24px] w-full px-[18px] font-sofia max-w-[480px] flex flex-col"
          @submit.prevent="nextStep()"
        >
          <!-- Field name emission -->
          <div>
            <div class="relative flex w-full">
              <input
                type="text"
                class="rounded-input w-full placeholder:text-white-500 h-[44px] pl-[16px] pr-[8px] border-none leading-input font-light text-white focus:ring-0 text-sm font-sofia bg-input w-[100%]"
                name="emission"
                id="emission"
                placeholder="Nom de l'émission"
                v-model="form.emission"
                maxlength="35"
                required
                :disabled="loading"
                :class="{
                  '!border-red-500 text-red-500': errors.emission,
                  'text-textColor': !errors.emission,
                  'opacity-50 cursor-progress': loading,
                }"
              />
            </div>
            <div class="flex items-center pt-[4px] justify-between">
              <p
                class="w-[174px] font-sofia h-[18px] text-mask font-light text-[12px] leading-[150%] text-right"
              >
                {{ errors.emission }}
              </p>
              <p
                class="font-light font-sofia text-[12px] leading-[150%] text-right"
              >
                {{ `${form.emission.length} / 35` }}
              </p>
            </div>
          </div>
          <!-- End field name emission -->

          <!-- Field episode emission -->
          <div>
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
                class="rounded-input w-full placeholder:text-white-300 min-h-[120px] max-h-[120px] pl-[16px] pr-[8px] border-none leading-input font-light text-white focus:ring-0 text-sm font-sofia bg-input"
                name="episode"
                id="episode"
                placeholder="Quoi de neuf ?"
                v-model="form.episode"
                maxlength="250"
                required
                :disabled="loading"
                :class="{
                  '!border-red-500 text-red-500': errors.episode,
                  'text-textColor': !errors.episode,
                  'opacity-50 cursor-progress': loading,
                }"
              />
            </div>

            <div class="flex items-center pt-[4px] justify-between">
              <p
                class="w-[174px] font-sofia h-[18px] text-mask font-light text-[12px] leading-[150%] text-right"
              >
                {{ errors.episode }}
              </p>
              <p
                class="font-light font-sofia text-[12px] leading-[150%] text-right"
              >
                {{ `${form.episode.length} / 250` }}
              </p>
            </div>
          </div>
          <!-- End field episode emission -->

          <!-- Field language -->
          <div>
            <label for="language" class="mb-3 ml-2 text-white-ddd">Langue <span class="text-mask">*</span></label>
            <div class="relative flex w-full mt-3">
              <select
                type="text"
                class="rounded-input w-full placeholder:text-white h-[44px] pl-[16px] pr-[8px] border-none font-light text-white focus:ring-0 text-sm font-sofia bg-input"
                name="language"
                id="language"
                v-model="form.language"
                maxlength="35"
                required
                :disabled="loading"
                :class="{
                  '!border-red-500 text-red-500': errors.language,
                  'text-textColor': !errors.language,
                  'opacity-50 cursor-progress': loading,
                }"
              >
                <option
                  v-for="(lang, i) in languages"
                  :key="i"
                  value="1"
                >
                  {{ lang.default_name }}
                </option>
              </select>
            </div>
          </div>
          <!-- End field language -->

          <!-- Field category -->
          <div class="mt-6">
            <label for="category" class="mb-3 ml-2 text-white-ddd">Catégorie <span class="text-mask">*</span></label>
            <div class="relative flex w-full mt-3">
              <select
                type="text"
                class="rounded-input w-full h-[44px] pl-[16px] pr-[8px] border-none font-light text-white focus:ring-0 text-sm font-sofia bg-input"
                name="category"
                id="category"
                v-model="form.category"
                maxlength="35"
                required
                :disabled="loading"
                :class="{
                  '!border-red-500 text-red-500': errors.category,
                  'text-textColor': !errors.category,
                  'opacity-50 cursor-progress': loading,
                }"
              >
                <option value="1">Technology</option>
              </select>
            </div>
          </div>
          <!-- End field category -->

          <!-- Recorder -->
            <!-- TODO: Add the recorder audio here -->
          <!-- End recorder -->

          <!-- Audio player -->
          <PodcastAudioPlayer :file="fileUrl" />
          <!-- End audio player -->

          <!-- Field file audio -->
          <div class="pt-[16px] flex w-full mt-2">
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
          <!-- End field file audio -->

          <div class="flex justify-between mt-5">
            <div class="text-left">
              <nuxt-link to="/app" class="font-sofia text-[12px] text-mask">
                <span class="fa fa-arrow-left"></span>
                <span>Accueil</span>
              </nuxt-link>
            </div>

            <div class="text-right">
              <nuxt-link to="/app" class="font-sofia text-[12px] text-mask">
                <span>Annuler</span>
                <span class="fa fa-trash"></span>
              </nuxt-link>
            </div>
          </div>
        </form>
      </div>
    </div>
    <PodcastFormCover
      v-else
      :loading="loadingPublishPodcast"
      @submitted="onPublish"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex"
import CreateEpisodePayload from "~/types/store/payload/CreateEpisodePayload";
import StateStore from "~/types/store/StateStore";

export default Vue.extend({
  name: "PodcastFormPodcasting",
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
      fileUrl: '',
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
        audio:  '' as string,
        photo:  '' as string,
        episode: '' as string,
        emission: '' as string,
        category: '' as string,
        language:  '' as string,
        message: '' as string | null,
      },
      form: {
        show: -1 as number,
        audio: null as any,
        photo: null as any,
        episode: '' as string,
        language: 1 as number,
        category: 1 as number,
        emission: '' as string,
      },
      toNextStep: false
    }
  },
  computed: {
    ...mapState({
      languages(state: any) {
        return state.language.languages
      },
      loadingPublishPodcast(state: any) {
        return state.episode.loading
      }
    }),
    podFirstStep(): any {
      return this.$cookies.get('__POD_FIRST_STEP__')
    }
  },
  mounted() {
    this.loadLanguages()
  },
  methods: {
    ...mapActions({
      loadLanguages: 'language/load',
      createEpisode: 'episode/createEpisode'
    }),
    async loadDocument(isInput: boolean, event: any) {
      try {
        this.setFileAudio(isInput, event)

        if (!this.file) return;

        const { name } = this.file;
        const extension = '.' + name.split('.').pop()

        if (this.validExtensions.includes(extension)) {
          const filesize = isInput
            ? (event.target.files[0].size / 1024 / 1024).toFixed(4)
            : (event.dataTransfer.files[0].size / 1024 / 1024).toFixed(4); // size in MB
          if (Number.parseFloat(filesize) < 301) {
            this.fileName = name.substring(0, name.indexOf("."));
            this.form.audio = this.file

            //this.readerFileAudio()
          } else {
            this.errors.message = "La taille du fichier est trop grande";
          }
        } else {
          this.errors.message = "Le format du fichier n'est supporté";
          this.file = null;
        }
      } catch (error) {
        this.errors.message = "erreur de traitement";
      }

      if (this.errors.message) {
        this.$toast.error(this.errors.message, {
          icon: 'exclamation',
          duration: 5000,
          action: {
            text: 'Ok',
            onClick(e: any, toastObject: any) {
              toastObject.goAway(0)
            }
          }
        })
      }
    },
    onChange(event: any) {
      this.loadDocument(true, event);
    },
    setFileAudio(isInput: boolean, event: any) {
      const target = event.target;

      if (!isInput) {
        this.file = event.dataTransfer.files[0]
        return
      }

      this.file = target.files ? target.files[0] : null
      this.fileUrl = URL.createObjectURL(this.file)
    },
    readerFileAudio() {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(this.file);
      fileReader.onload = (e: any) => {
        const bufferArray = e?.target.result;
      };
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
    async nextStep(): Promise<any> {
      try {
        this.$cookies.set('__POD_FIRST_STEP__', this.form)
        this.toNextStep = true
        // this.$router.push("/app/postaudio");
      } catch (error) {
        console.log('ERROR FOUND', error);

        this.errors.message = "Verifier votre connexion internet";
      } finally {
        this.loading = false;
      }
    },
    onPublish(fileCover: File) {
      this.form.photo = fileCover
      this.publishPodcast()
    },
    async publishPodcast() {
      try {
        const inputs: CreateEpisodePayload = {
          show: this.form.show,
          audio: this.form.audio,
          photo: this.form.photo,
          language: this.form.language,
          description: this.form.episode,
          'categories-0': this.form.category,
          'categories-1': 2,
        }

        await this.createEpisode(inputs)

        this.$toast.show('Podcast publié avec succès', {
          type: 'success',
          duration: 8000,
          action: {
            text: 'Ok',
            onClick(e: any, toastObject: any) {
              toastObject.goAway(0)
            }
          }
        })

        this.$router.push('/app/ecoute')
      } catch (error) {
        this.catchErrors(error)
      }
    },
    catchErrors(error: any) {
      console.log(error);
      
      this.$toast.error('Une erreur est survenue, veuillez réessayez !')
    }
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

.text-white-aaa {
  color: #aaa !important;
}

.text-white-ddd {
  color: #ddd !important;
}

input::placeholder,
textarea::placeholder {
  color: #ddd !important;
}
</style>

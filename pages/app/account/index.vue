<template>
  <div class="relative h-screen pt-[155px] pb-[40px] bg-background">
    <app-bar-audio />
    <div class="flex px-[18px] flex-col text-white font-paralucent">
      <div class="flex bg-[#030925] flex-col pb-[100px]">
        <!-- background -->
        <ProfileHeader />

        <div class="flex flex-col pl-[27px] pr-[6.73px]">
          <!-- Name and description -->
          <ProfileName :profil="profil" />
          <!-- End name and description -->

          <!-- Contact details -->
          <ProfileContactDetails :profil="profil" />
          <!-- End contact details -->

          <!-- Interests -->
          <ProfileInterests :interests="profil.interests" />
          <!-- End interests -->
        </div>

        <!-- Details infos -->
        <ProfileDetailsInfos :profil="profil" />
        <!-- End details infos -->

        <!-- Episodes -->
        <ProfileEpisodes :results="results" />
        <!-- End episodes -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex"
import AppBarAudio from "~/components/AppBarAudio.vue";

export default Vue.extend({
  components: { AppBarAudio },
  name: "ProfilIndexPage",
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
      previewImage: null as string | ArrayBuffer | null,
      validExtensions: [
        "image/jpg",
        "image/png",
        "image/jpeg",
        ".png",
        ".jpg",
        ".jpeg",
      ],
      file: null as any,
      fileName: null as string | null,
      profil: {
        name: '',
        username: '',
        tel: '',
        energie: 0,
        stat: 0,
        email: '',
        categories: [],
        interests: [],
        description: '',
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
  watch: {

      user(newVa, old) {
          if (newVa) {
            this.profil = newVa
            this.profil.name = 'Don de Dieu Bolenge'
          }
      }

  },
  methods: {
    ...mapActions({
        loadUser: 'user/loadUser'
    }),
    async loadDocument(isInput: boolean, event: any) {
      try {
        this.file = this.getFileToUpload(isInput, event);

        if (!this.file) return;

        const { type, name } = this.file;

        if (this.validExtensions.includes(type)) {
          const filesize = this.getFileSize(isInput, event); // size in MB
          
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
    getFileSize(isInput: boolean, event: any) {
      return isInput
            ? (event.target.files[0].size / 1024 / 1024).toFixed(4)
            : (event.dataTransfer.files[0].size / 1024 / 1024).toFixed(4)
    },
    getFileToUpload(isInput: boolean, event: any) {
      if (isInput) {
        return event.target.files
            ? event.target.files[0]
            : null
      }

      return event.dataTransfer.files[0]
    },
    onChange(event: any) {
      this.loadDocument(true, event);
    },
  },
});
</script>

<style>
.my-item {
  background: #000a2e;
  box-shadow: 0px 3.03226px 3.03226px rgba(0, 0, 0, 0.18);
  border-radius: 18.1935px;
}

.separator-item {
  border-top: 0.1px solid rgb(17 24 39);
  margin-top: 0.6rem;
  padding-top: 0.6rem;
}

.text-muted {
  color: rgb(148 163 184);
}

.text-username-profile {
  color: rgb(148 163 184);
  margin-top: 0.6rem;
}
.icon-about-user {
  font-size: 1.4rem;
}

.interest-center {
  margin-top: 25px !important;
}

.item-interest {
  background-color: rgba(186, 230, 253, 0.3);
  padding: .3rem .5rem;
  margin: .3rem .5rem .5rem 0;
  font-size: 12.5px;
}
</style>

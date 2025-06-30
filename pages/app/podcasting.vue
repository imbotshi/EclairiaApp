<template>
  <PodcastFormPodcasting />
</template>

<script lang="ts">
import Vue from "vue"
import { mapGetters } from "vuex"

export default Vue.extend({
  name: "PodcastingPage",
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

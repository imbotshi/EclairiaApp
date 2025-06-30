<template>
  <div class="h-screen bg-background relative">
    <app-navbar />

    <div class="pt-[185px] flex flex-col">
      <!-- Block Episode -->
      <EpisodeBlock
        v-for="(feed, i) in newsFeed"
        :key="i"
        :episode="feed"
      />
      <!-- End Block Episode -->
    </div>

    <!-- Sidebar energy -->
    <HomeSidebarEnergy />
    <!-- End Sidebar energy -->
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'
import Vue from "vue";
import AppNavBar from "~/components/AppNavbar.vue";
import StateStore from '~/types/store/StateStore';

export default Vue.extend({
  name: "AppIndexPage",
  layout: "app",
  head() {
    return {
      title: "Accueil - Eclairia",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "AccueilPage",
          name: "AccueilPage",
          content: "Accueil",
        },
      ],
    };
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
    ...mapGetters('episode', [
      'newsFeed'
    ])
  },
  mounted() {
    this.loadNewsFeedEpisodes()
  },
  methods: {
    ...mapActions({
      loadEpisode: 'episode/getEpisodeById',
      loadNewsFeedEpisodes: 'episode/loadEpisodesForNewsFeed',
    }),
    async addComment(): Promise<any> {
      try {
        // this.$router.push("/app");
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
.shaddow-custom {
  box-shadow: -5.7943px -5.7943px 17.3829px rgba(255, 239, 239, 0.03),
    5.7943px 5.7943px 17.3829px rgba(0, 0, 0, 0.3);
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
</style>

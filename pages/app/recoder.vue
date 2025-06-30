<template>
  <div class="relative h-screen overflow-hidden bg-background"></div>
</template>

<script lang="ts">
import Vue from "vue";
import AppNavBar from "~/components/AppNavbar.vue";

export default Vue.extend({
  name: "AppIndexPage",
  layout: "app",
  head() {
    return {
      title: "Acceuil - Eclairia",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "AcceuilPage",
          name: "AcceuilPage",
          content: "Acceuil",
        },
      ],
    };
  },
});
</script>

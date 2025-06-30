<template>
  <div
    class="relative flex items-center justify-center h-screen no-scroll bg-background"
  >
    <main class="pb-[160px] w-full">
      <nuxt />
    </main>
    <player />
    <navigation-bar />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBar from "~/components/NavigationBar.vue";
import Player from "~/components/Player.vue";

export default Vue.extend({
  components: {
    NavigationBar,
    Player,
  },
  name: "LayoutPage",
});
</script>
<style scoped>
.no-scroll::-webkit-scrollbar {
  display: none;
}
</style>

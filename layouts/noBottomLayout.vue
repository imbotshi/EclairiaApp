<template>
  <div
    class="relative flex items-center justify-center h-screen no-scroll bg-background"
  >
    <main class="w-full">
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBar from "~/components/NavigationBar.vue";

export default Vue.extend({
  components: {
    NavigationBar,
  },
  name: "NoBottomLayout",
});
</script>
<style scoped>
.no-scroll::-webkit-scrollbar {
  display: none;
}
</style>

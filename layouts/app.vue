<template>
  <div
    class="relative flex items-center justify-center h-screen no-scroll bg-background"
  >
    <UtilsSnackbar />
    
    <main class="pb-[160px] w-full">
      <nuxt />
    </main>
    <navigation-bar />
  </div>
</template>

<script lang="ts">
import NavigationBar from "~/components/NavigationBar.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    NavigationBar,
  },
  name: "LayoutPage"
});
</script>
<style scoped>
.no-scroll::-webkit-scrollbar {
  display: none;
}
</style>

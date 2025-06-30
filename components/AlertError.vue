<template>
  <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 absolute top-0 left-0 w-full" role="alert">
    <p class="font-bold">Error</p>
    <ul class="pl-3">
      <li v-for="(err, i) in errors" :key="i">
        * {{ err }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AlertError',
  props: {
    errors: {
      type: Array,
      default() {
        return []
      }
    }
  }
})
</script>
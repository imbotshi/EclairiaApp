<template>
  <div class="pt-[10px] space-x-1 separator-item mt-4 interest-center">
    <div>
      <p
        class="font-sofia text-[16px] pr-[2px] leading-[120%] font-normal"
      >
        Centre d’intérêts
      </p>
    </div>

    <div>
      <ul v-if="interests.length" class="flex items-center flex-wrap py-2">
        <li
          v-for="(interest, i) in interests"
          :key="i"
          class="item-interest rounded-lg"
        >
          {{ interest }}
        </li>
      </ul>
      <ul v-else class="flex items-center flex-wrap py-2">
        <li
          class="item-interest rounded-lg"
        >
          Aucun pour l'instant
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ProfileInterests',
  props: {
    interests: {
      type: Array,
      default() {
        return []
      }
    }
  }
})
</script>

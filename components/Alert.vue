<template>
  <div
    class="border-l-8 text-dark-700 p-4 absolute top-0 left-0 w-full"
    :class="`bg-${typeColor}-100 border-${typeColor}-400`"
    role="alert"
  >
    <p class="font-bold capitalize">{{ typeAlert }}</p>
    <ul class="pl-3">
      <li v-for="(content, i) in contents" :key="i">
        * {{ content }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Alert',
  props: {
    typeAlert: {
      type: String,
      default: 'info'
    },
    contents: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      defaultColors: {
        info: 'cyan',
        danger: 'red',
        success: 'green',
      }
    }
  },
  computed: {
    typeColor(): string {
      let colors: any = { ...this.defaultColors }
      let type: string = colors[this.typeAlert]

      return type ? type : 'cyan'
    }
  }
})
</script>

<style>
  .bg-green-400 {
    background-color: rgb(74 222 128);
  }
  .bg-cyan-400 {
    background-color: rgb(34 211 238);
  }

  .border-green-400 {
    border-color: rgb(74 222 128);
  }
  .border-cyan-400 {
    border-color: rgb(34 211 238);
  }

  .bg-green-100	{
    background-color: rgb(220 252 231);
  }

  .bg-cyan-100 {
    background-color: rgb(207 250 254);
  }
</style>
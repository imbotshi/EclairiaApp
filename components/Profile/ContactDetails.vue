<template>
  <div>
    <!-- Phone -->
    <div v-if="profil.tel" class="flex min-h-[33.27px] items-center separator-item">
      <div class="mr-1">
        <span class="fa fa-phone w-10 icon-about-user"></span>
      </div>
      <a :href="`tel:${profil.tel}`" class="w-90">
        <span class="mb-1 block">{{ profil.tel }}</span>
        <div class="font-normal text-[11.6452px] leading-[100%] text-muted">
          <span class="fa fa-globe"></span>
          <span>Public</span>
        </div>
      </a>
    </div>
    <!-- End phone -->

    <!-- Email -->
    <div v-if="profil.email" class="flex min-h-[33.27px] items-center separator-item">
      <div class="mr-1">
        <span class="fa fa-envelope w-10 icon-about-user"></span>
      </div>
      <a :href="`mailto:${profil.email}`" class="w-90">
        <span class="mb-1 block">{{ profil.email }}</span>
        <div class="font-normal text-[11.6452px] leading-[100%] text-muted">
          <span class="fa fa-lock"></span>
          <span>Personnel</span>
        </div>
      </a>
    </div>
    <!-- End email -->

    <!-- City -->
    <div class="flex min-h-[33.27px] items-center separator-item">
      <div class="mr-1">
        <span class="fa fa-map-marker-alt w-10 icon-about-user"></span>
      </div>
      <div class="w-90">
        <span class="mb-1 block">Kinshasa - RD Congo</span>
        <div class="font-normal text-[11.6452px] leading-[100%] text-muted">
          <span class="fa fa-globe"></span>
          <span>Public</span>
        </div>
      </div>
    </div>
    <!-- End city -->

    <!-- Setting -->
    <div class="flex min-h-[33.27px] items-center separator-item">
      <div class="mr-1">
        <span class="fa fa-cog w-10 icon-about-user"></span>
      </div>
      <nuxt-link to="/app/settings" class="block w-90">
        <span class="mb-1 block">Paramètres</span>
        <div class="font-normal text-[11.6452px] leading-[100%] text-muted">
          <span>Compte, Sécurité et Confidentialité</span>
        </div>
      </nuxt-link>
    </div>
    <!-- End settings -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ProfileContactDetails',
  props: {
    profil: {
      type: Object,
      default() {
        return {
        name: '',
        username: '',
        tel: '',
        energie: 0,
        stat: 0,
        email: '',
        categories: [],
        interests: [],
        description: '',
      }
      }
    }
  }
})
</script>
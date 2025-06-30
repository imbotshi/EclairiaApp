<template>
  <div
    class="fixed top-0 z-50 w-full pt-[15px] px-[40px] flex justify-center items-center h-[76px] bg-background"
  >
    <form
      @submit.prevent="search"
      class="w-full max-w-[325.39px] font-paralucent text-white flex justify-center items-center space-x-[12px] h-[50.25px] input-background"
    >
      <!-- category -->
      <label id="search">
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.72607 12.6699C4.72607 7.88166 8.56641 4 13.3037 4C15.5786 4 17.7604 4.91344 19.369 6.53936C20.9776 8.16529 21.8814 10.3705 21.8814 12.6699C21.8814 17.4582 18.041 21.3399 13.3037 21.3399C8.56641 21.3399 4.72607 17.4582 4.72607 12.6699ZM21.7394 19.6544L24.2941 21.7165H24.3384C24.8553 22.2389 24.8553 23.0859 24.3384 23.6083C23.8216 24.1307 22.9836 24.1307 22.4668 23.6083L20.3468 21.1786C20.1463 20.9767 20.0337 20.7025 20.0337 20.4165C20.0337 20.1305 20.1463 19.8563 20.3468 19.6544C20.7333 19.2705 21.3529 19.2705 21.7394 19.6544Z"
            fill="white"
          />
        </svg>
      </label>
      <input
        type="text"
        class="bg-transparent focus:outline-none placeholder:text-white focus:ring-0 h-full border-none leading-md font-normal text-[12.5632px]"
        name="search"
        id="search"
        placeholder="Rechercher un éclaireurs"
        required
        autocomplete="false"
        v-model="search"
        :disabled="loading"
      />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "SearchBar",
  computed: {
    ...mapGetters("player", ["playerPourcentage"]),
  },
  data() {
    return {
      search: "",
      password: "",
      loading: false,
      errors: {
        username: "" as string | null,
        password: "" as string | null,
        message: "" as string | null,
      },
    };
  },
  methods: {
    async search(): Promise<any> {
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
.bg-inactive {
  background: rgba(245, 245, 245, 0.16);
  transform: matrix(1, 0, 0, -1, 0, 0);
}

.input-background {
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0px 0px 6.28159px rgba(0, 0, 0, 0.19);
  backdrop-filter: blur(5.02527px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 15.0758px;
}

.active-bg {
  background: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
}

#progress::after {
  content: "";
  position: absolute;
  bottom: -8px;
  height: 16px;
  width: 16px;
  border-radius: 100%;
  background: #f72559;
  right: -16px;
  z-index: inherit;
}
</style>

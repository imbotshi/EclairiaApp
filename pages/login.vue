<template>
  <div
    class="relative flex flex-col items-center justify-center h-screen bg-background"
  >
    <nuxt-link to="/app">
      <SvgLogoEclairiaVoice />
    </nuxt-link>
    <form
      class="pt-[24px] w-[70%] max-w-[480px] flex flex-col space-y-[16px]"
      @submit.prevent="login"
    >
      <div class="flex">
        <input
          type="text"
          class="rounded-input w-full placeholder:text-white h-[44px] pl-[16px] pr-[8px] border-none leading-input font-semibold text-white focus:ring-0 text-sm font-sofia bg-input"
          name="username_or_email"
          id="username_or_email"
          placeholder="Email, nom d'utilisateur"
          v-model="form.username_or_email"
          required
          :disabled="loading"
          :class="{
            '!border-red-500 text-red-500': errors.username_or_email,
            'text-textColor': !errors.username_or_email,
            'opacity-50 cursor-progress': loading,
          }"
        />
      </div>
      <div class="flex">
        <input
          :type="hiddePassword ? 'password' : 'text'"
          class="rounded-input placeholder:text-white w-full focus:ring-0 h-[44px] pl-[16px] pr-[8px] border-none leading-input font-semibold text-white text-sm font-sofia bg-input rounded-r-none"
          name="password"
          id="password"
          placeholder="Mot de passe"
          required
          v-model="form.password"
          :disabled="loading"
          :class="{
            '!border-red-500 text-red-500': errors.password,
            'text-textColor': !errors.password,
            'opacity-50 cursor-progress': loading,
          }"
        />
        <div class="flex -mr-px">
          <span class="flex items-center leading-normal bg-input rounded-input rounded-l-none border-none px-3 whitespace-no-wrap text-sm text-gray-500 cursor-pointer" @click="toggleHiddePassword">
            <span v-if="hiddePassword" class="fa fa-eye"></span>
            <span v-else class="fa fa-eye-slash"></span>
          </span>
        </div>
      </div>

      <div class="flex justify-end">
        <button
          type="reset"
          class="text-sm font-light text-white focus:outline-none focus:shadow-none leading-lg font-sofia"
        >
          Mot de passe Oublié ?
        </button>
      </div>
      <button
        type="submit"
        class="h-[44px] focus:outline-none focus:shadow-none focus:ring-1 focus:ring-primary w-full rounded-input bg-primary flex items-center justify-center font-semibold text-sm leading-input font-sofia text-white"
        :disabled="loading"
        :class="{'disabled:opacity-75': loading}"
      >
        <span v-if="!loading">Se connecter</span>
        <span v-else>Chargement...</span>
      </button>
    </form>
    <div
      class="font-sofia text-body font-light leading-lg text-center pt-[34px] flex flex-col justify-center items-center h-[40px]"
    >
      <p class="text-white">Vous n'avez pas de compte ?</p>
      <nuxt-link to="/register" class="text-primary"
        ><span>Inscrivez-vous</span></nuxt-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "LoginPage",
  layout: 'blank',
  middleware: ['guest'],
  head() {
    return {
      title: "Login - Eclairia",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "LoginPage",
          name: "LoginPage",
          content: "Connectez-vous à votre session",
        },
      ],
    };
  },
  data() {
    return {
      form: {
        username_or_email: "",
        password: "",
      },
      errors: {
        username_or_email: '' as string | null,
        username: "" as string | null,
        password: "" as string | null,
        message: "" as string | null,
      },
      session: <any>{},
      hiddePassword: true
    };
  },
  computed: {
    ...mapState({
      loading(state: any) {
        return state.user.loading
      },
      loggedIn(state: any) {
        return state.user.authenticated
      }
    })
  },
  mounted() {
    this.unauthorizedAlert()
  },
  methods: {
    ...mapActions({
      loginUser: 'user/login'
    }),
    async login(): Promise<any> {
      try {
        let response = await this.loginUser(this.form)

        this.$toast.clear()
        this.$toast.show(response.message, {
          type: response.status,
          duration: 8000,
          action: {
            text: 'Ok',
            onClick(e: any, toastObject: any) {
              toastObject.goAway(0)
            }
          }
        })

        if (response.status === 'success') {
          this.$session.loggedIn = true
          this.loginRedirect()
        }
      } catch (error: any) {
        this.catchHttpErrors(error)
        this.showErrorMessage()
      }
    },

    async loginWithNuxtAuth(): Promise<any> {
      await this.$auth.loginWith('local', { data: this.form })
    },

    /**
     * Allow track errors when registration failed
     * @param {any} err
     * @return void 
     */
    catchHttpErrors(err: any) : void {
      if (!navigator.onLine) {
        this.errors.message = "Vous n'êtes pas connecté à Internet !"
        return
      }

      this.errors.message = err.message
    },
    showErrorMessage() {
      this.$toast.error(this.errors.message, {
        icon: 'exclamation',
        duration: 15000,
        action: {
          text: 'Ok',
          onClick(e: any, toastObject: any) {
            toastObject.goAway(0)
          }
        }
      })
    },
    toggleHiddePassword() {
      this.hiddePassword = !this.hiddePassword
    },
    loginRedirect(): void {
      const fromRedirect = this.$cookies.get('__FROM_REDIRECT__')

      if (fromRedirect) {
        this.$cookies.remove('__FROM_REDIRECT__')
        return this.$router.push(fromRedirect)
      }

      this.$router.push("/app");
    },
    unauthorizedAlert(): void {
      const unauthorized = this.$cookies.get('__UNAUTHORIZED__')

      if (unauthorized) {
        this.$toast.show('Veuillez vous connecté pour effectuer cette opération.', {
          type: 'info',
          duration: 20000,
          action: {
            text: 'Ok',
            onClick(e: any, toastObject: any) {
              toastObject.goAway(0)
            }
          }
        })

        this.$cookies.remove('__UNAUTHORIZED__')
      }
    }
  },
});
</script>
<style scoped></style>

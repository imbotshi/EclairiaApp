<template>
  <div
    class="flex flex-col pt-[80px] h-screen max-h-screen min-h-screen text-white bg-background font-paralucent"
  >
    <div
      class="bg-[#02071E] w-full space-x-[31.41px] flex h-[135.68px] items-center pt-[23.87px] pl-[25.13px] pr-[39.47px] pb-[17.59px]"
    >
      <div
        class="relative h-[84.8px] w-[84.8px] flex items-center justify-center rounded-full"
      >
        <nuxt-img
          loading="lazy"
          alt="user profil"
          provider="imgix"
          :src="profil.url"
          sizes="sm:355px md:320px lg:480px"
          class="h-[84.8px] w-[84.8px] min-h-[84.8px] min-w-[84.8px] absolute rounded-full object-cover"
        />
      </div>
      <div class="flex flex-col items-start w-full space-y-[10.05px]">
        <p class="font-bold text-[22.6137px] leading-[90%]">
          {{ profil.name }}
        </p>
        <p class="text-[20.1011px] leading-[90%] font-normal">
          Le nombre d’éclair :
          <span class="font-bold">{{ profil.eclaire }}</span>
        </p>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "LogoutIndexPage",
  layout: "app",
  head() {
    return {
      title: "Déconnexion - Eclairia",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "LogoutPage",
          name: "LogoutPage",
          content: "Logout",
        },
      ],
    };
  },
  data() {
    return {
      profil: {
        url: "/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
        name: "Dom's Buhendwa",
        eclaire: 25,
      },
    };
  },
  methods: {
    ...mapActions({
      logoutUser: 'user/logout'
    }),
    logout() {
      this.$swal({
        title: 'Déconnexion',
        text: 'Voudriez-vous vraiment vous déconnecter ?',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
        showCancelButton: true,
        cancelButtonColor: 'rgb(55 48 163)',
        confirmButtonColor: 'rgb(148 163 184)',
        customClass: {
          popup: 'swal-main-popup'
        }
      })
      .then(({ isConfirmed } : any) => {
        if (isConfirmed) {
          return this.onLogout()
        }

        this.$router.push('/app/settings')
      })
    },
    async onLogout() {
      try {
        const response = await this.logoutUser()

        this.$toast.show(response.message, {
          type: 'success',
          duration: 8000,
          action: {
            text: 'Ok',
            onClick(e: any, toastObject: any) {
              toastObject.goAway(0)
            }
          }
        })

        this.$session.loggedIn = false
        this.$router.push('/app')
      } catch (err: any) {
        this.$toast.show(err.message, {
          type: 'error',
          duration: 8000,
          action: {
            text: 'Ok',
            onClick(e: any, toastObject: any) {
              toastObject.goAway(0)
            }
          }
        })
      }
    }
  },
  mounted() {
    this.logout()
  },
});
</script>
<style scoped>
.shaddow-custom {
  box-shadow: -5.7943px -5.7943px 17.3829px rgba(255, 239, 239, 0.03),
    5.7943px 5.7943px 17.3829px rgba(0, 0, 0, 0.3);
}

.file-input {
  background: linear-gradient(
    113.08deg,
    rgba(241, 15, 71, 0.08) 2.17%,
    rgba(255, 71, 117, 0.08) 100%
  );
}

.custom-back {
  border: 1.66506px solid rgba(3, 30, 122, 0.18);
  box-shadow: inset -3.33013px -3.33013px 9.99038px rgba(255, 239, 239, 0.02),
    inset 3.33013px 3.33013px 9.99038px rgba(0, 0, 0, 0.3);
  border-radius: 18.3157px;
}

.active-back {
  fill: url("#gradient");
}

.text-mask {
  background: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.red-svg {
  background: linear-gradient(113.08deg, #f10f47 2.17%, #ff4775 100%);
}

.swal2-icon {
  width: 3em !important;
  height: 3em !important;
}

.swal2-icon .swal2-icon-content {
  font-size: 2.75em !important;
}

.swal-main-popup {
  background-color: rgba(186, 230, 253, 0.3) !important;
}

.swal2-title {
  color: #fff !important;
}

.swal2-html-container {
  color: #bbb !important;
}
</style>

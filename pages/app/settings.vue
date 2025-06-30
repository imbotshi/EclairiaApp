<template>
  <div
    class="flex flex-col pt-[80px] h-screen max-h-screen min-h-screen text-white bg-background font-paralucent"
  >
    <div v-if="$session.loggedIn">

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

      <p
        class="font-bold pl-[12.56px] pt-[15.05px] text-[22.6137px] leading-[90%]"
      >
        Informations générales
      </p>
      
      <div
        class="flex flex-col pt-[32.66px] pl-[35.18px] pr-[42.71px] items-start space-y-[20.01px]"
      >
        <nuxt-link
          v-for="item in links"
          :key="item.name"
          :to="item.url"
          class="flex w-full"
        >
          <div
            class="flex items-center justify-between w-full h-[50.25px] bg-linkColor p-[10.0505px] rounded-[10.0505px]"
          >
            <p class="text-[20.1011px] leading-[90%]">{{ item.name }}</p>
            <svg
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.5131 15.5241C28.5131 22.459 22.8722 28.0873 15.9499 28.0873L15.5984 28.0825C8.82585 27.8961 3.38672 22.3414 3.38672 15.5241C3.38672 8.6018 9.01502 2.96094 15.9499 2.96094C22.8722 2.96094 28.5131 8.6018 28.5131 15.5241ZM13.4623 10.4988C13.098 10.8757 13.098 11.4662 13.4749 11.8305L17.181 15.5241L13.4749 19.2177C13.098 19.582 13.098 20.185 13.4623 20.5494C13.8392 20.9263 14.4297 20.9263 14.794 20.5494L19.1785 16.1899C19.3544 16.0141 19.4549 15.7754 19.4549 15.5241C19.4549 15.2728 19.3544 15.0341 19.1785 14.8582L14.794 10.4988C14.6181 10.3104 14.3794 10.2224 14.1407 10.2224C13.8894 10.2224 13.6507 10.3104 13.4623 10.4988Z"
                fill="white"
              />
            </svg>
          </div>
        </nuxt-link>
      </div>
    </div>

    <div
      v-else
    >
      <p
        class="font-bold pl-[12.56px] pt-[15.05px] text-[22.6137px] leading-[90%] mt-2"
      >
        Identifiez-vous
      </p>

      <div
        class="flex flex-col pt-[32.66px] pl-[35.18px] pr-[42.71px] items-start space-y-[20.01px]"
      >
        <nuxt-link
          v-for="item in linksOffline"
          :key="item.name"
          :to="item.url"
          class="flex w-full"
        >
          <div
            class="flex items-center justify-between w-full h-[50.25px] bg-linkColor p-[10.0505px] rounded-[10.0505px]"
          >
            <p class="text-[20.1011px] leading-[90%]">{{ item.name }}</p>
            <svg
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.5131 15.5241C28.5131 22.459 22.8722 28.0873 15.9499 28.0873L15.5984 28.0825C8.82585 27.8961 3.38672 22.3414 3.38672 15.5241C3.38672 8.6018 9.01502 2.96094 15.9499 2.96094C22.8722 2.96094 28.5131 8.6018 28.5131 15.5241ZM13.4623 10.4988C13.098 10.8757 13.098 11.4662 13.4749 11.8305L17.181 15.5241L13.4749 19.2177C13.098 19.582 13.098 20.185 13.4623 20.5494C13.8392 20.9263 14.4297 20.9263 14.794 20.5494L19.1785 16.1899C19.3544 16.0141 19.4549 15.7754 19.4549 15.5241C19.4549 15.2728 19.3544 15.0341 19.1785 14.8582L14.794 10.4988C14.6181 10.3104 14.3794 10.2224 14.1407 10.2224C13.8894 10.2224 13.6507 10.3104 13.4623 10.4988Z"
                fill="white"
              />
            </svg>
          </div>
        </nuxt-link>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SettingsIndexPage",
  layout: "app",
  head() {
    return {
      title: "Settings - Eclairia",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "SettingsPage",
          name: "SettingsPage",
          content: "Settings",
        },
      ],
    };
  },
  data() {
    return {
      links: [
        {
          name: "Mon profil",
          url: "/app/account",
        },
        {
          name: "Mon émission",
          url: "/app/settings",
        },
        {
          name: "Notifications",
          url: "/app/settings",
        },
        {
          name: "Politique de confidentialité",
          url: "/app/settings",
        },
        {
          name: "Inviter des amis",
          url: "/app/settings",
        },
        {
          name: "Se déconnecter",
          url: "/app/logout",
        },
      ] as Array<{ name: string; url: string }>,
      linksOffline: [
        {
          name: "Se connecter",
          url: "/login",
        },
        {
          name: "Créer un compte",
          url: "/register",
        },
      ] as Array<{ name: string; url: string }>,
      profil: {
        url: "/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
        name: "Dom's Buhendwa",
        eclaire: 25,
      },
    };
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
</style>

<template>
  <div class="h-screen bg-background">
    <app-bar-audio />
    <div class="pt-[185px] flex flex-col">
      <div
        class="flex flex-col px-[18px] max-h-screen min-h-screen h-screen text-white font-paralucent"
      >
        <div class="flex items-center justify-between space-x-2">
          <div
            class="bg-bgComment border-[0.820455px] gap-[9.85px] border-[#0036FF] w-[275.33px] h-[38px] rounded-[11.4px] flex justify-center items-center py-[7.6px] px-[11.4px]"
          >
            <svg
              width="15"
              height="24"
              viewBox="0 0 15 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.32054 4.3563C7.18717 4.42825 7.10401 4.56508 7.10401 4.7139V7.03122H2.52841C2.29737 7.03122 2.10986 7.21438 2.10986 7.44006C2.10986 7.66575 2.29737 7.84891 2.52841 7.84891H7.10401V10.1662C7.10401 10.3156 7.18717 10.4524 7.32054 10.5238C7.45392 10.5963 7.61688 10.5914 7.74579 10.5124L12.1746 7.78622C12.2963 7.71099 12.3699 7.58071 12.3699 7.44006C12.3699 7.29942 12.2963 7.16914 12.1746 7.09391L7.74579 4.36774C7.67771 4.32631 7.60014 4.30505 7.52257 4.30505C7.45336 4.30505 7.38361 4.3225 7.32054 4.3563Z"
                fill="#0036FF"
              />
              <path
                d="M7.15926 19.6436C7.29264 19.5717 7.37579 19.4348 7.37579 19.286V16.9687H11.9514C12.1824 16.9687 12.3699 16.7855 12.3699 16.5598C12.3699 16.3342 12.1824 16.151 11.9514 16.151H7.37579V13.8337C7.37579 13.6843 7.29264 13.5475 7.15926 13.4761C7.02589 13.4036 6.86293 13.4085 6.73402 13.4875L2.30519 16.2137C2.18353 16.2889 2.10986 16.4192 2.10986 16.5598C2.10986 16.7005 2.18353 16.8308 2.30519 16.906L6.73402 19.6322C6.8021 19.6736 6.87967 19.6949 6.95724 19.6949C7.02644 19.6949 7.0962 19.6774 7.15926 19.6436Z"
                fill="#0036FF"
              />
            </svg>
            <p
              class="text-[#0036FF] text-[13.3px] leading-[112%] font-sofia font-medium"
            >
              Voir les commentaires les plus récents
            </p>
          </div>
          <div class="flex items-center space-x-2">
            <p
              class="font-sofia text-[11.0455px] leading-[90%] capitalize font-semibold"
            >
              Lingala
            </p>
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.90902 1.33341C12.589 1.33341 15.5757 4.32675 15.5757 8.00008C15.5757 11.6801 12.589 14.6667 8.90902 14.6667C5.23568 14.6667 2.24235 11.6801 2.24235 8.00008C2.24235 4.32675 5.23568 1.33341 8.90902 1.33341ZM6.24235 9.32008C6.44235 9.51341 6.75568 9.51341 6.94902 9.31341L8.90902 7.34675L10.869 9.31341C11.0624 9.51341 11.3823 9.51341 11.5757 9.32008C11.7757 9.12008 11.7757 8.80675 11.5757 8.61341L9.26235 6.28675C9.16902 6.19341 9.04235 6.14008 8.90902 6.14008C8.77568 6.14008 8.64902 6.19341 8.55568 6.28675L6.24235 8.61341C6.14235 8.70675 6.09568 8.83342 6.09568 8.96008C6.09568 9.09341 6.14235 9.22008 6.24235 9.32008Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="flex flex-col pt-[12px]">
          <div class="flex py-[8px]">
            <p class="font-semibold text-[24px] leading-md">Podcasts</p>
          </div>
          <div class="flex flex-wrap gap-y-[24px] gap-x-[12px]">
            <div
              v-for="item in results"
              :key="item.id"
              class="flex flex-col space-y-2"
            >
              <button
                class="relative focus:outline-none focus:ring-0 flex items-center justify-center focus:ring-[#ff4775] rounded-[34.7141px] w-[164px] h-[210.86px] self-center"
                @click="setPlayer(item)"
              >
                <nuxt-img
                  :class="{ 'border-2': currentPlaying.id === item.id }"
                  loading="lazy"
                  alt="user-profile"
                  provider="imgix"
                  sizes="sm:355px md:320px lg:480px"
                  :src="item.url"
                  @click="setPlayer(item)"
                  class="absolute border-[#ff4775] w-[164px] h-[210.86px] object-cover rounded-[34px]"
                />
              </button>
              <div class="flex items-start w-full space-x-1">
                <nuxt-link
                  to="/app/profil"
                  class="h-[24px] w-[24px] relative rounded-full flex items-center justify-center"
                >
                  <nuxt-img
                    loading="lazy"
                    alt="user-profile"
                    provider="imgix"
                    sizes="sm:355px md:320px lg:480px"
                    class="absolute h-[24px] w-[24px] object-cover rounded-full"
                    :src="item.profil"
                  />
                </nuxt-link>
                <div class="flex flex-col pr-2 w-[140.02px] space-y-[2px]">
                  <div class="flex items-center w-full space-x-1">
                    <p
                      class="font-semibold h-[17px] font-paralucent overflow-hidden flex-1 capitalize text-[14px] leading-md text-ellipsis"
                    >
                      {{ item.title }}
                    </p>
                    <div class="flex items-center space-x-1">
                      <p
                        class="font-bold h-[13.02px] font-paralucent capitalize text-[10.8482px] leading-full text-ellipsis overflow-hidden max-w-[50px]"
                      >
                        {{ item.eclaire }}
                      </p>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <mask
                          id="mask0_3470_1382jgq"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="15"
                          height="14"
                        >
                          <rect
                            x="0.726074"
                            y="0.125"
                            width="13.75"
                            height="13.75"
                            fill="url(#pattern0xxxxvvbbm9)"
                          />
                        </mask>
                        <g mask="url(#mask0_3470_1382jgq)">
                          <rect
                            x="0.726074"
                            y="0.125"
                            width="15.1615"
                            height="15.1615"
                            fill="#F7D618"
                          />
                        </g>
                        <defs>
                          <pattern
                            id="pattern0xxxxvvbbm9"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlink:href="#image0_3470_13820007"
                              transform="scale(0.01)"
                            />
                          </pattern>
                          <image
                            id="image0_3470_13820007"
                            width="100"
                            height="100"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNBJREFUeAHtnbtrVEEUh3fFR6GYSiOiYEDr+CgklWtjbaX+BWIlGBGMUQw+UKOCNmIjpNEiKFipiI9WfEVbX1hpFCsfRRSzfoe4ZJPsTnaz2ZlzZmZg2Hvv3HvnnN835z5O7r0pFHLJCmQFsgJZgaxAViArkBWYfwWK87/LsHssl8ubsKCTOlIsFr+EtSbh3gHRQX1ArZQxJg4mLElY1xF/qEKi6nec6VJYyxLsHdG7qX+rQFRPXrIkyQJLxjpsHaStni+rHdupa6rnhDpD6xlEKJRo21Gv3dpy00CAIVeJF6yJ7rLXNBAc203d4nLQWptZIETHIsQ+aU3w2ew1CwTH9lLXz+agtXaTQIiOZQh91JrYjdhrEgiOyR34qkYctLaOOSBExwpE7rUmdKP2mgOCY8eoyxt10Np6poAQHV0ILCfzaIspIFA4TV0SLQ0cMwOE6OjGXrkRjLqYAQIFVwIxGkgmgBAdJRSPJoHoGj3qgQBDEohnXU7E1KYeCGLLeWNrTKK7fFENhOiIMoFoFgiGR5lANAmE6Ig2gWgSCEZHm0A0B4ToiDqBaA4IBkedQDQFhOhYh8FRJxBNAcHY6BOIZoAQHZJA3OMyOPY2bTeGSSQQXYNKDRCio4ShSSQQ1QMBRlIJRPVAMHAXNZkEomogREdyCUTVQDBO7jk2uIxMqS3oSZ3oSDKB6BpgC12NHtoO0Ee7n0DsAfzwHHz5zDa3eXH08Ry2nfMmcnUTpCCSJBDfUTU/9FbGvkNAuehLpJBALuPkfl+OttDPb7ZdC5SvLeyj4U2DnEOIji4s3NewlWFXXEz38u67lxIECJ7JizbiqJUy6stQ74csomMjzr2ghhoMzWr7lMOVt5vWEKKcMwRD4PU1S7CV9b0CITq2YaylBOIdouNRKwI3u63XQxZAnmCgt/BvVoxp648zvxkgr6ctb+ustwj5f+6wAkNEv+EbhnTqDQh9dUqHRsoYdsqDFt6LTyCv8E5usiyUq0THxxCGegOCg/IxsSNUSUdoLt8x7lQoA70mF4FykXOJ3IPspM7lKz09bLemzWKdx85vbe4jjt0Dc5jazvKJnS8NqZa3Q1ZIJ5vo+wTR8auJ9ed91QxkUtI3TF6bnA0zlYFM6t5PdPyZnA0zlYFM6P6Mn1thEEztNQOZ0KOP6FBxOZ6BFAp3gfFw6jgNN5c6EEkg9oeTf2bPqQO5TnSMzJQl3JKUgUhebSCc9LV7ThnIFaLjQ21Zwi1NFcgPJD8TTvb6PacKZJDo8PKcVX3pa7ekCERAyEN6KkuKQI4THXLIUllSA/IWCsETiK6RkBoQFQnEDGRCAUkg3nSJoaEtpQhRk0B0gU8FyD1O5GoSiKkDUZdATB2IPIH40iWCprbYD1kqE4iuARA7EEkgvncJoK0tZiA/EVtlAtE1CGIGojaBmCIQSSCa+g+fFUixRsiA5gRiRfxavzECkb8Cqk4g1gJRWRYjkMNEh1zumiyxAXkOBfUJRNdIiQ2IRIeKJxBdorvaYgJiJoEYExD5ZFKtIlGh6gnEWkZGt4y3m7ZTx2u8QjUUnbNWHAJGL3WsCsp9pjus2D+bnV6/5DCbMY22A2Al68onk0Y5iXv90kKjNub1sgJZgaxAViArkBXICmQFNCnwD4PKp2cwdfH0AAAAAElFTkSuQmCC"
                          />
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <p
                      class="font-semibold h-[10px] text-[8px] w-[102.39px] leading-md text-justify"
                    >
                      {{ item.username }}
                    </p>
                    <div class="flex items-center space-x-1">
                      <svg
                        width="9"
                        height="7"
                        viewBox="0 0 9 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.46376 6.28986H7.61881C8.1044 6.28986 8.4981 5.89616 8.4981 5.41057V1.94836L1.2912 6.27249C1.34704 6.28348 1.40463 6.28986 1.46376 6.28986ZM7.61881 0.574463H1.46376C0.978176 0.574463 0.584473 0.968166 0.584473 1.45375V4.91597L7.79137 0.591829C7.73553 0.580838 7.67794 0.574463 7.61881 0.574463ZM2.70137 2.99691L2.02871 2.48253L1.35605 2.99691L1.61324 2.16598L0.940586 1.6516H1.77152L2.02871 0.820665L2.2859 1.6516H3.11683L2.44418 2.16598L2.70137 2.99691V2.99691Z"
                          fill="#007FFF"
                        />
                        <path
                          d="M2.2859 1.65144L2.02871 0.82051L1.77152 1.65144H0.940586L1.61324 2.16583L1.35605 2.99676L2.02871 2.48237L2.70137 2.99676L2.44418 2.16583L3.11683 1.65144H2.2859ZM1.2912 6.27234L8.4981 1.9482V1.65144L0.996201 6.15254C1.08545 6.20881 1.18437 6.25102 1.2912 6.27234V6.27234ZM7.79137 0.591675L0.584473 4.91581V5.21257L8.08637 0.711478C7.99712 0.655204 7.8982 0.612998 7.79137 0.591675V0.591675Z"
                          fill="#F7D618"
                        />
                        <path
                          d="M8.08637 0.71167L0.584473 5.21277V5.41061C0.584473 5.72385 0.74956 5.99709 0.996201 6.15273L8.4981 1.65163V1.45379C8.4981 1.14054 8.33301 0.867305 8.08637 0.71167V0.71167Z"
                          fill="#CE1021"
                        />
                      </svg>
                      <p
                        class="font-sofia text-[7.06467px] leading-full capitalize font-normal"
                      >
                        {{ item.langue }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import AppBarAudio from "~/components/AppBarAudio.vue";

export default Vue.extend({
  name: "AppIndexPage",
  layout: "playing",
  components: {
    AppBarAudio,
  },
  head() {
    return {
      title: "Bibliotheque - Eclairia",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "BibliothequePage",
          name: "BibliothequePage",
          content: "Bibliotheque",
        },
      ],
    };
  },
  data() {
    return {
      results: [
        {
          title: "Afro Militant 3.0",
          username: "Esli Mushida",
          id: "1",
          langue: "lingala",
          eclaire: 10,
          url: "/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
          profil:
            "/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
          active: true,
        },
        {
          title: "Rythme et histoque",
          username: "Roger Kalamu",
          id: "2",
          langue: "Wolof",
          eclaire: 10,
          url: "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
          profil:
            "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
          active: false,
        },
        {
          title: "Musala Ya Internet",
          username: "Esli Mushida",
          id: "3",
          eclaire: 10,
          langue: "Wolof",
          url: "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
          profil:
            "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
          active: false,
        },
        {
          title: "Musala Ya Internet",
          username: "Roger Kalamu",
          id: "4",
          langue: "lingala",
          eclaire: 10,
          url: "/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
          profil:
            "/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
          active: true,
        },
      ] as Array<{
        title: string;
        username: string;
        id: string;
        eclaire: number;
        active: boolean;
        url: string;
        langue: string;
        profil: string;
      }>,
      loading: false,
    };
  },
  computed: {
    ...mapGetters("player", [
      "currentPlaying",
      "isMiniatureActive",
      "currentStatut",
    ]),
  },
  methods: {
    setPlayer(item: any) {
      // this.$store.commit("player/SET_SONG", item);
      // if (!this.currentStatut) this.$store.commit("player/SET_STATUT");
      // this.$store.commit("player/SET_MINIATURE", true);
      this.$router.push("/app/ecoute");
    },
  },
});
</script>

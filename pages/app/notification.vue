<template>
  <div class="h-screen bg-background">
    <notification-bar :text="'notification'" />
    <div
      class="pt-[160px] flex flex-col h-screen px-[27.64px] space-y-[22.61px] max-h-screen min-h-screen text-white font-paralucent"
    >
      <div class="flex items-start w-full space-x-[10.05px]">
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          class="min-w-[31px] min-h-[31px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <mask
            id="mask0_3165_889etoile"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="31"
            height="31"
          >
            <rect
              x="0.487793"
              y="0.54541"
              width="30.0758"
              height="30.0758"
              fill="url(#patternetoile)"
            />
          </mask>
          <g mask="url(#mask0_3165_889etoile)">
            <rect
              x="0.487793"
              y="0.54541"
              width="31.6234"
              height="31.6234"
              fill="#F7D618"
            />
          </g>
          <defs>
            <pattern
              id="patternetoile"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_3165_889etoile"
                transform="scale(0.01)"
              />
            </pattern>
            <image
              id="image0_3165_889etoile"
              width="100"
              height="100"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNBJREFUeAHtnbtrVEEUh3fFR6GYSiOiYEDr+CgklWtjbaX+BWIlGBGMUQw+UKOCNmIjpNEiKFipiI9WfEVbX1hpFCsfRRSzfoe4ZJPsTnaz2ZlzZmZg2Hvv3HvnnN835z5O7r0pFHLJCmQFsgJZgaxAViArkBWYfwWK87/LsHssl8ubsKCTOlIsFr+EtSbh3gHRQX1ArZQxJg4mLElY1xF/qEKi6nec6VJYyxLsHdG7qX+rQFRPXrIkyQJLxjpsHaStni+rHdupa6rnhDpD6xlEKJRo21Gv3dpy00CAIVeJF6yJ7rLXNBAc203d4nLQWptZIETHIsQ+aU3w2ew1CwTH9lLXz+agtXaTQIiOZQh91JrYjdhrEgiOyR34qkYctLaOOSBExwpE7rUmdKP2mgOCY8eoyxt10Np6poAQHV0ILCfzaIspIFA4TV0SLQ0cMwOE6OjGXrkRjLqYAQIFVwIxGkgmgBAdJRSPJoHoGj3qgQBDEohnXU7E1KYeCGLLeWNrTKK7fFENhOiIMoFoFgiGR5lANAmE6Ig2gWgSCEZHm0A0B4ToiDqBaA4IBkedQDQFhOhYh8FRJxBNAcHY6BOIZoAQHZJA3OMyOPY2bTeGSSQQXYNKDRCio4ShSSQQ1QMBRlIJRPVAMHAXNZkEomogREdyCUTVQDBO7jk2uIxMqS3oSZ3oSDKB6BpgC12NHtoO0Ee7n0DsAfzwHHz5zDa3eXH08Ry2nfMmcnUTpCCSJBDfUTU/9FbGvkNAuehLpJBALuPkfl+OttDPb7ZdC5SvLeyj4U2DnEOIji4s3NewlWFXXEz38u67lxIECJ7JizbiqJUy6stQ74csomMjzr2ghhoMzWr7lMOVt5vWEKKcMwRD4PU1S7CV9b0CITq2YaylBOIdouNRKwI3u63XQxZAnmCgt/BvVoxp648zvxkgr6ctb+ustwj5f+6wAkNEv+EbhnTqDQh9dUqHRsoYdsqDFt6LTyCv8E5usiyUq0THxxCGegOCg/IxsSNUSUdoLt8x7lQoA70mF4FykXOJ3IPspM7lKz09bLemzWKdx85vbe4jjt0Dc5jazvKJnS8NqZa3Q1ZIJ5vo+wTR8auJ9ed91QxkUtI3TF6bnA0zlYFM6t5PdPyZnA0zlYFM6P6Mn1thEEztNQOZ0KOP6FBxOZ6BFAp3gfFw6jgNN5c6EEkg9oeTf2bPqQO5TnSMzJQl3JKUgUhebSCc9LV7ThnIFaLjQ21Zwi1NFcgPJD8TTvb6PacKZJDo8PKcVX3pa7ekCERAyEN6KkuKQI4THXLIUllSA/IWCsETiK6RkBoQFQnEDGRCAUkg3nSJoaEtpQhRk0B0gU8FyD1O5GoSiKkDUZdATB2IPIH40iWCprbYD1kqE4iuARA7EEkgvncJoK0tZiA/EVtlAtE1CGIGojaBmCIQSSCa+g+fFUixRsiA5gRiRfxavzECkb8Cqk4g1gJRWRYjkMNEh1zumiyxAXkOBfUJRNdIiQ2IRIeKJxBdorvaYgJiJoEYExD5ZFKtIlGh6gnEWkZGt4y3m7ZTx2u8QjUUnbNWHAJGL3WsCsp9pjus2D+bnV6/5DCbMY22A2Al68onk0Y5iXv90kKjNub1sgJZgaxAViArkBXICmQFNCnwD4PKp2cwdfH0AAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
        <div class="flex flex-col items-start space-y-[7.54px]">
          <div class="flex items-center space-x-[7.54px]">
            <nuxt-link
              to="/app/profil"
              v-for="item in notificationTop.profils"
              :key="item.id"
              class="min-h-[40.2px] min-w-[40.2px] max-h-[40.2px] max-w-[40.2px] relative rounded-full flex items-center justify-center"
            >
              <nuxt-img
                loading="lazy"
                alt="user-profile"
                sizes="sm:355px md:320px lg:480px"
                provider="imgix"
                class="absolute min-h-[40.2px] min-w-[40.2px] max-h-[40.2px] max-w-[40.2px] object-cover rounded-full"
                :src="item.url"
              />
            </nuxt-link>
          </div>
          <p class="font-normal text-[15.0758px]">
            <span class="font-bold leading-[120%] pr-[2px]">
              {{ firstName }}
            </span>
            {{ ` et ${numbers} autres éclaireurs ont éclairé votre émission` }}
          </p>
        </div>
      </div>
      <div class="flex items-start w-full space-x-[10.05px]">
        <nuxt-link
          to="/app/profil"
          class="min-h-[40.2px] min-w-[40.2px] max-h-[40.2px] max-w-[40.2px] relative rounded-full flex items-center justify-center"
        >
          <nuxt-img
            loading="lazy"
            alt="user-profile"
            provider="imgix"
            sizes="sm:355px md:320px lg:480px"
            class="absolute min-h-[40.2px] min-w-[40.2px] max-h-[40.2px] max-w-[40.2px] object-cover rounded-full"
            src="/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
          />
        </nuxt-link>
        <div
          class="flex flex-col items-start text-[15.0758px] space-y-[7.54px]"
        >
          <p class="font-bold leading-[120%]">
            {{ firstName }}
          </p>
          <p class="font-normal leading-[120%] h-[18px] text-commentaireColor">
            En commentaire à votre émission
          </p>
          <p class="font-normal text-[17.5884px]">C’est complètement dingue.</p>
        </div>
      </div>
      <div class="flex items-start w-full space-x-[10.05px]">
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          class="min-w-[31px] min-h-[31px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <mask
            id="mask0_3165_889etoile"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="31"
            height="31"
          >
            <rect
              x="0.487793"
              y="0.54541"
              width="30.0758"
              height="30.0758"
              fill="url(#patternetoile)"
            />
          </mask>
          <g mask="url(#mask0_3165_889etoile)">
            <rect
              x="0.487793"
              y="0.54541"
              width="31.6234"
              height="31.6234"
              fill="#F7D618"
            />
          </g>
          <defs>
            <pattern
              id="patternetoile"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_3165_889etoile"
                transform="scale(0.01)"
              />
            </pattern>
            <image
              id="image0_3165_889etoile"
              width="100"
              height="100"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNBJREFUeAHtnbtrVEEUh3fFR6GYSiOiYEDr+CgklWtjbaX+BWIlGBGMUQw+UKOCNmIjpNEiKFipiI9WfEVbX1hpFCsfRRSzfoe4ZJPsTnaz2ZlzZmZg2Hvv3HvnnN835z5O7r0pFHLJCmQFsgJZgaxAViArkBWYfwWK87/LsHssl8ubsKCTOlIsFr+EtSbh3gHRQX1ArZQxJg4mLElY1xF/qEKi6nec6VJYyxLsHdG7qX+rQFRPXrIkyQJLxjpsHaStni+rHdupa6rnhDpD6xlEKJRo21Gv3dpy00CAIVeJF6yJ7rLXNBAc203d4nLQWptZIETHIsQ+aU3w2ew1CwTH9lLXz+agtXaTQIiOZQh91JrYjdhrEgiOyR34qkYctLaOOSBExwpE7rUmdKP2mgOCY8eoyxt10Np6poAQHV0ILCfzaIspIFA4TV0SLQ0cMwOE6OjGXrkRjLqYAQIFVwIxGkgmgBAdJRSPJoHoGj3qgQBDEohnXU7E1KYeCGLLeWNrTKK7fFENhOiIMoFoFgiGR5lANAmE6Ig2gWgSCEZHm0A0B4ToiDqBaA4IBkedQDQFhOhYh8FRJxBNAcHY6BOIZoAQHZJA3OMyOPY2bTeGSSQQXYNKDRCio4ShSSQQ1QMBRlIJRPVAMHAXNZkEomogREdyCUTVQDBO7jk2uIxMqS3oSZ3oSDKB6BpgC12NHtoO0Ee7n0DsAfzwHHz5zDa3eXH08Ry2nfMmcnUTpCCSJBDfUTU/9FbGvkNAuehLpJBALuPkfl+OttDPb7ZdC5SvLeyj4U2DnEOIji4s3NewlWFXXEz38u67lxIECJ7JizbiqJUy6stQ74csomMjzr2ghhoMzWr7lMOVt5vWEKKcMwRD4PU1S7CV9b0CITq2YaylBOIdouNRKwI3u63XQxZAnmCgt/BvVoxp648zvxkgr6ctb+ustwj5f+6wAkNEv+EbhnTqDQh9dUqHRsoYdsqDFt6LTyCv8E5usiyUq0THxxCGegOCg/IxsSNUSUdoLt8x7lQoA70mF4FykXOJ3IPspM7lKz09bLemzWKdx85vbe4jjt0Dc5jazvKJnS8NqZa3Q1ZIJ5vo+wTR8auJ9ed91QxkUtI3TF6bnA0zlYFM6t5PdPyZnA0zlYFM6P6Mn1thEEztNQOZ0KOP6FBxOZ6BFAp3gfFw6jgNN5c6EEkg9oeTf2bPqQO5TnSMzJQl3JKUgUhebSCc9LV7ThnIFaLjQ21Zwi1NFcgPJD8TTvb6PacKZJDo8PKcVX3pa7ekCERAyEN6KkuKQI4THXLIUllSA/IWCsETiK6RkBoQFQnEDGRCAUkg3nSJoaEtpQhRk0B0gU8FyD1O5GoSiKkDUZdATB2IPIH40iWCprbYD1kqE4iuARA7EEkgvncJoK0tZiA/EVtlAtE1CGIGojaBmCIQSSCa+g+fFUixRsiA5gRiRfxavzECkb8Cqk4g1gJRWRYjkMNEh1zumiyxAXkOBfUJRNdIiQ2IRIeKJxBdorvaYgJiJoEYExD5ZFKtIlGh6gnEWkZGt4y3m7ZTx2u8QjUUnbNWHAJGL3WsCsp9pjus2D+bnV6/5DCbMY22A2Al68onk0Y5iXv90kKjNub1sgJZgaxAViArkBXICmQFNCnwD4PKp2cwdfH0AAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
        <div class="flex flex-col items-start space-y-[7.54px]">
          <div class="flex items-center space-x-[7.54px]">
            <nuxt-link
              to="/app/profil"
              class="min-h-[40.2px] min-w-[40.2px] max-h-[40.2px] max-w-[40.2px] relative rounded-full flex items-center justify-center"
            >
              <nuxt-img
                loading="lazy"
                alt="user-profile"
                provider="imgix"
                sizes="sm:355px md:320px lg:480px"
                class="absolute min-h-[40.2px] min-w-[40.2px] max-h-[40.2px] max-w-[40.2px] object-cover rounded-full"
                src="/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
              />
            </nuxt-link>
          </div>
          <div class="flex items-center space-x-1 text-[15.0758px]">
            <p class="font-normal">
              <span class="font-bold leading-[120%] h-[36px] pr-[2px]">
                {{ firstName }}
              </span>
              vous a envoyé un éclaire
            </p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <mask
                id="mask0_3165_889"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect
                  x="0.487793"
                  y="0.54541"
                  width="15.0758"
                  height="15.0758"
                  fill="url(#pattern0)"
                />
              </mask>
              <g mask="url(#mask0_3165_889)">
                <rect
                  x="0.487793"
                  y="0.54541"
                  width="16.6234"
                  height="16.6234"
                  fill="#F7D618"
                />
              </g>
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlink:href="#image0_3165_889" transform="scale(0.01)" />
                </pattern>
                <image
                  id="image0_3165_889"
                  width="100"
                  height="100"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNBJREFUeAHtnbtrVEEUh3fFR6GYSiOiYEDr+CgklWtjbaX+BWIlGBGMUQw+UKOCNmIjpNEiKFipiI9WfEVbX1hpFCsfRRSzfoe4ZJPsTnaz2ZlzZmZg2Hvv3HvnnN835z5O7r0pFHLJCmQFsgJZgaxAViArkBWYfwWK87/LsHssl8ubsKCTOlIsFr+EtSbh3gHRQX1ArZQxJg4mLElY1xF/qEKi6nec6VJYyxLsHdG7qX+rQFRPXrIkyQJLxjpsHaStni+rHdupa6rnhDpD6xlEKJRo21Gv3dpy00CAIVeJF6yJ7rLXNBAc203d4nLQWptZIETHIsQ+aU3w2ew1CwTH9lLXz+agtXaTQIiOZQh91JrYjdhrEgiOyR34qkYctLaOOSBExwpE7rUmdKP2mgOCY8eoyxt10Np6poAQHV0ILCfzaIspIFA4TV0SLQ0cMwOE6OjGXrkRjLqYAQIFVwIxGkgmgBAdJRSPJoHoGj3qgQBDEohnXU7E1KYeCGLLeWNrTKK7fFENhOiIMoFoFgiGR5lANAmE6Ig2gWgSCEZHm0A0B4ToiDqBaA4IBkedQDQFhOhYh8FRJxBNAcHY6BOIZoAQHZJA3OMyOPY2bTeGSSQQXYNKDRCio4ShSSQQ1QMBRlIJRPVAMHAXNZkEomogREdyCUTVQDBO7jk2uIxMqS3oSZ3oSDKB6BpgC12NHtoO0Ee7n0DsAfzwHHz5zDa3eXH08Ry2nfMmcnUTpCCSJBDfUTU/9FbGvkNAuehLpJBALuPkfl+OttDPb7ZdC5SvLeyj4U2DnEOIji4s3NewlWFXXEz38u67lxIECJ7JizbiqJUy6stQ74csomMjzr2ghhoMzWr7lMOVt5vWEKKcMwRD4PU1S7CV9b0CITq2YaylBOIdouNRKwI3u63XQxZAnmCgt/BvVoxp648zvxkgr6ctb+ustwj5f+6wAkNEv+EbhnTqDQh9dUqHRsoYdsqDFt6LTyCv8E5usiyUq0THxxCGegOCg/IxsSNUSUdoLt8x7lQoA70mF4FykXOJ3IPspM7lKz09bLemzWKdx85vbe4jjt0Dc5jazvKJnS8NqZa3Q1ZIJ5vo+wTR8auJ9ed91QxkUtI3TF6bnA0zlYFM6t5PdPyZnA0zlYFM6P6Mn1thEEztNQOZ0KOP6FBxOZ6BFAp3gfFw6jgNN5c6EEkg9oeTf2bPqQO5TnSMzJQl3JKUgUhebSCc9LV7ThnIFaLjQ21Zwi1NFcgPJD8TTvb6PacKZJDo8PKcVX3pa7ekCERAyEN6KkuKQI4THXLIUllSA/IWCsETiK6RkBoQFQnEDGRCAUkg3nSJoaEtpQhRk0B0gU8FyD1O5GoSiKkDUZdATB2IPIH40iWCprbYD1kqE4iuARA7EEkgvncJoK0tZiA/EVtlAtE1CGIGojaBmCIQSSCa+g+fFUixRsiA5gRiRfxavzECkb8Cqk4g1gJRWRYjkMNEh1zumiyxAXkOBfUJRNdIiQ2IRIeKJxBdorvaYgJiJoEYExD5ZFKtIlGh6gnEWkZGt4y3m7ZTx2u8QjUUnbNWHAJGL3WsCsp9pjus2D+bnV6/5DCbMY22A2Al68onk0Y5iXv90kKjNub1sgJZgaxAViArkBXICmQFNCnwD4PKp2cwdfH0AAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div class="flex items-start w-full space-x-[10.05px]">
        <nuxt-link
          to="/app/profil"
          class="min-h-[40.2px] min-w-[40.2px] max-h-[40.2px] max-w-[40.2px] relative rounded-full flex items-center justify-center"
        >
          <nuxt-img
            loading="lazy"
            alt="user-profile"
            provider="imgix"
            sizes="sm:355px md:320px lg:480px"
            class="absolute min-h-[40.2px] min-w-[40.2px] max-h-[40.2px] max-w-[40.2px] object-cover rounded-full"
            src="/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
          />
        </nuxt-link>
        <div
          class="flex flex-col items-start text-[15.0758px] space-y-[7.54px]"
        >
          <p class="font-bold leading-[120%]">
            {{ firstName }}
          </p>
          <p class="font-normal leading-[120%] h-[18px] text-commentaireColor">
            En commentaire à votre émission
          </p>
          <p class="font-normal text-[17.5884px]">
            Moi je ne suis pas loin du marché. On se retrouve sur place dans
            15min.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import DynamicBar from "~/components/DynamicBar.vue";
import NotificationBar from "~/components/NotificationBar.vue";

export default Vue.extend({
  components: { DynamicBar, NotificationBar },
  name: "NotificationsIndexPage",
  layout: "app",
  head() {
    return {
      title: "Notifications - Eclairia",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "NotificationsPage",
          name: "NotificationsPage",
          content: "Notifications",
        },
      ],
    };
  },
  data() {
    return {
      file: null as any,
      fileName: null as string | null,
      notificationTop: {
        profils: [
          {
            id: "2",
            name: "Dom's Buhendwa",
            url: "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
          },
          {
            id: "2",
            name: "Dom's Buhendwa",
            url: "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
          },
          {
            id: "2",
            name: "Dom's Buhendwa",
            url: "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
          },
          {
            id: "2",
            name: "Dom's Buhendwa",
            url: "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
          },
        ],
      },

      emission: "",
      description: "",
      loading: false,
      errors: {
        emission: "" as string | null,
        description: "" as string | null,
        message: "" as string | null,
      },
    };
  },
  computed: {
    ...mapGetters("player", [
      "currentPlaying",
      "isMiniatureActive",
      "currentStatut",
    ]),
    firstName(): string {
      return this.notificationTop &&
        this.notificationTop.profils &&
        this.notificationTop.profils.length > 0
        ? this.notificationTop.profils[0].name
        : "";
    },
    numbers(): number {
      return this.notificationTop && this.notificationTop.profils
        ? this.notificationTop.profils.length
        : 0;
    },
  },
  methods: {
    async addComment(): Promise<any> {
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

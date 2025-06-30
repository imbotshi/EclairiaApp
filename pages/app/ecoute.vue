<template>
  <div class="h-screen bg-background">
    <ecoute-navbar />
    <div class="pt-[185px] flex flex-col">
      <div
        class="flex flex-col h-screen max-h-screen min-h-screen text-white font-paralucent"
      >
        <button
          class="relative flex rounded-[34px] w-[201.75px] h-[259.39px] self-center"
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
            class="absolute focus:outline-none focus:ring-0 flex items-center justify-center focus:ring-[#ff4775] border-[#ff4775] w-[201.75px] h-[259.39px] object-cover rounded-[34px]"
          />
        </button>
        <!-- content -->
        <div class="flex relative flex-col pt-[32px] space-y-[32px]">
          <!-- button -->

          <div class="pr-[90px] pl-4 text-white flex items-start flex-col">
            <div class="flex items-start space-x-3">
              <nuxt-link
                to="/app/profil"
                class="h-[40px] w-[40px] relative rounded-full flex items-center justify-center"
              >
                <nuxt-img
                  loading="lazy"
                  alt="user-profile"
                  provider="imgix"
                  sizes="sm:355px md:320px lg:480px"
                  class="absolute h-[40px] w-[40px] object-cover rounded-full"
                  :src="item.profil"
                />
              </nuxt-link>
              <div class="flex flex-col pr-2 w-[251px] space-y-1">
                <div class="flex items-center space-x-1">
                  <p
                    class="font-bold font-paralucent capitalize text-[17.5931px] leading-md text-ellipsis"
                  >
                    {{ item.title }}
                  </p>
                  <p
                    class="font-bold font-paralucent capitalize text-[10.2626px] leading-md text-ellipsis max-w-[200px]"
                  >
                    {{ item.username }}
                  </p>
                </div>
                <p
                  class="font-sofia font-normal text-[11.7287px] leading-[124%] tracking-[-0.247459px] text-[#F5F5F5] text-justify"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>
            <div class="pt-[22px] flex flex-col space-y-[17px]">
              <!-- button more comment -->
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
              <!-- comments -->
              <div class="flex flex-col space-y-1">
                <div class="flex items-start space-x-1">
                  <nuxt-link
                    to="/app/profil"
                    class="h-[40px] w-[40px] relative rounded-full flex items-center justify-center"
                  >
                    <nuxt-img
                      loading="lazy"
                      alt="user-profile"
                      provider="imgix"
                      sizes="sm:355px md:320px lg:480px"
                      class="absolute object-cover w-[32px] h-[32px] rounded-full"
                      src="/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
                    />
                  </nuxt-link>
                  <div class="flex flex-col space-y-1">
                    <p
                      class="font-normal font-sofia lowercase text-[12px] text-justify max-w-[200px]"
                    >
                      j'aime cette emission
                    </p>
                    <p
                      class="font-paralucent font-bold text-[8.79655px] leading-lg text-justify"
                    >
                      Williams.N. Son
                    </p>
                  </div>
                </div>
              </div>

              <!-- eddit -->
              <form class="w-[291.33px]" @submit.prevent="addComment">
                <div class="flex items-center gap-[4.71px]">
                  <label for="comment">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      class="text-[#4256A4]"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.38281 18.3239C3.38281 10.679 9.49176 3.78979 17.9224 3.78979C26.1644 3.78979 32.404 10.5482 32.404 18.2803C32.404 27.2478 25.0906 32.8144 17.8934 32.8144C15.5136 32.8144 12.8727 32.1749 10.7542 30.925C10.0141 30.4744 9.39019 30.1401 8.59211 30.4017L5.66097 31.2738C4.92093 31.5063 4.25345 30.925 4.47111 30.1401L5.44331 26.8845C5.60293 26.4339 5.57391 25.9543 5.34174 25.5764C4.09383 23.28 3.38281 20.7656 3.38281 18.3239ZM16.0071 18.3241C16.0071 19.356 16.8342 20.1844 17.8645 20.199C18.8947 20.199 19.7218 19.356 19.7218 18.3386C19.7218 17.3067 18.8947 16.4782 17.8645 16.4782C16.8487 16.4637 16.0071 17.3067 16.0071 18.3241ZM22.6966 18.3386C22.6966 19.356 23.5237 20.199 24.554 20.199C25.5842 20.199 26.4113 19.356 26.4113 18.3386C26.4113 17.3067 25.5842 16.4782 24.554 16.4782C23.5237 16.4782 22.6966 17.3067 22.6966 18.3386ZM11.175 20.1993C10.1593 20.1993 9.31768 19.3563 9.31768 18.3389C9.31768 17.307 10.1448 16.4785 11.175 16.4785C12.2053 16.4785 13.0324 17.307 13.0324 18.3389C13.0324 19.3563 12.2053 20.1847 11.175 20.1993Z"
                      />
                    </svg>
                  </label>
                  <input
                    type="text"
                    class="rounded-[10.5882px] bg-[#091133] focus:outline-none text-[#4256A4] placeholder:text-[#4256A4] w-full focus:ring-0 min-h-[44px] pl-[16px] pr-[8px] border-none leading-lg font-normal text-[12px] font-sofia"
                    name="comment"
                    id="comment"
                    placeholder="Ajouter un comment"
                    required
                    v-model="comment"
                    :disabled="loading"
                  />
                </div>
              </form>
            </div>
            <!-- quick actions -->
          </div>
          <div
            class="w-[52.21px] z-10 absolute right-[32px] bottom-[10px] h-[279.76px] gap-[23.18px] justify-center items-center flex flex-col p-[8.69145px] bg-selectBg rounded-[23.1772px] shaddow-custom"
          >
            <div class="gap-[5.79px] flex flex-col items-center justify-center">
              <div
                class="bg-[#031554] w-[34.83px] h-[34.83px] p-[9.99038px] custom-back flex items-center justify-center"
              >
                <svg
                  width="36"
                  height="35"
                  viewBox="0 0 36 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g filter="url(#filter0_ii_3126_1066)">
                    <rect
                      x="0.479004"
                      y="0.143311"
                      width="34.8295"
                      height="34.8295"
                      rx="17.4148"
                      fill="#031554"
                    />
                    <mask
                      id="mask0_3126_1066"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="10"
                      y="10"
                      width="16"
                      height="15"
                    >
                      <rect
                        x="10.4692"
                        y="10.1337"
                        width="14.8488"
                        height="14.8488"
                        fill="url(#pattern0)"
                      />
                    </mask>
                    <g mask="url(#mask0_3126_1066)">
                      <rect
                        x="10.4692"
                        y="10.1337"
                        width="16.3731"
                        height="16.3731"
                        fill="#0A206C"
                      />
                    </g>
                    <rect
                      x="1.31154"
                      y="0.975842"
                      width="33.1645"
                      height="33.1645"
                      rx="16.5822"
                      stroke="#031E7A"
                      stroke-opacity="0.18"
                      stroke-width="1.66506"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_ii_3126_1066"
                      x="-2.85112"
                      y="-3.18682"
                      width="41.4898"
                      height="41.4898"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="3.33013" dy="3.33013" />
                      <feGaussianBlur stdDeviation="4.99519" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_3126_1066"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="-3.33013" dy="-3.33013" />
                      <feGaussianBlur stdDeviation="4.99519" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.9375 0 0 0 0 0.9375 0 0 0 0.02 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_innerShadow_3126_1066"
                        result="effect2_innerShadow_3126_1066"
                      />
                    </filter>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_3126_1066"
                        transform="scale(0.01)"
                      />
                    </pattern>
                    <image
                      id="image0_3126_1066"
                      width="100"
                      height="100"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNBJREFUeAHtnbtrVEEUh3fFR6GYSiOiYEDr+CgklWtjbaX+BWIlGBGMUQw+UKOCNmIjpNEiKFipiI9WfEVbX1hpFCsfRRSzfoe4ZJPsTnaz2ZlzZmZg2Hvv3HvnnN835z5O7r0pFHLJCmQFsgJZgaxAViArkBWYfwWK87/LsHssl8ubsKCTOlIsFr+EtSbh3gHRQX1ArZQxJg4mLElY1xF/qEKi6nec6VJYyxLsHdG7qX+rQFRPXrIkyQJLxjpsHaStni+rHdupa6rnhDpD6xlEKJRo21Gv3dpy00CAIVeJF6yJ7rLXNBAc203d4nLQWptZIETHIsQ+aU3w2ew1CwTH9lLXz+agtXaTQIiOZQh91JrYjdhrEgiOyR34qkYctLaOOSBExwpE7rUmdKP2mgOCY8eoyxt10Np6poAQHV0ILCfzaIspIFA4TV0SLQ0cMwOE6OjGXrkRjLqYAQIFVwIxGkgmgBAdJRSPJoHoGj3qgQBDEohnXU7E1KYeCGLLeWNrTKK7fFENhOiIMoFoFgiGR5lANAmE6Ig2gWgSCEZHm0A0B4ToiDqBaA4IBkedQDQFhOhYh8FRJxBNAcHY6BOIZoAQHZJA3OMyOPY2bTeGSSQQXYNKDRCio4ShSSQQ1QMBRlIJRPVAMHAXNZkEomogREdyCUTVQDBO7jk2uIxMqS3oSZ3oSDKB6BpgC12NHtoO0Ee7n0DsAfzwHHz5zDa3eXH08Ry2nfMmcnUTpCCSJBDfUTU/9FbGvkNAuehLpJBALuPkfl+OttDPb7ZdC5SvLeyj4U2DnEOIji4s3NewlWFXXEz38u67lxIECJ7JizbiqJUy6stQ74csomMjzr2ghhoMzWr7lMOVt5vWEKKcMwRD4PU1S7CV9b0CITq2YaylBOIdouNRKwI3u63XQxZAnmCgt/BvVoxp648zvxkgr6ctb+ustwj5f+6wAkNEv+EbhnTqDQh9dUqHRsoYdsqDFt6LTyCv8E5usiyUq0THxxCGegOCg/IxsSNUSUdoLt8x7lQoA70mF4FykXOJ3IPspM7lKz09bLemzWKdx85vbe4jjt0Dc5jazvKJnS8NqZa3Q1ZIJ5vo+wTR8auJ9ed91QxkUtI3TF6bnA0zlYFM6t5PdPyZnA0zlYFM6P6Mn1thEEztNQOZ0KOP6FBxOZ6BFAp3gfFw6jgNN5c6EEkg9oeTf2bPqQO5TnSMzJQl3JKUgUhebSCc9LV7ThnIFaLjQ21Zwi1NFcgPJD8TTvb6PacKZJDo8PKcVX3pa7ekCERAyEN6KkuKQI4THXLIUllSA/IWCsETiK6RkBoQFQnEDGRCAUkg3nSJoaEtpQhRk0B0gU8FyD1O5GoSiKkDUZdATB2IPIH40iWCprbYD1kqE4iuARA7EEkgvncJoK0tZiA/EVtlAtE1CGIGojaBmCIQSSCa+g+fFUixRsiA5gRiRfxavzECkb8Cqk4g1gJRWRYjkMNEh1zumiyxAXkOBfUJRNdIiQ2IRIeKJxBdorvaYgJiJoEYExD5ZFKtIlGh6gnEWkZGt4y3m7ZTx2u8QjUUnbNWHAJGL3WsCsp9pjus2D+bnV6/5DCbMY22A2Al68onk0Y5iXv90kKjNub1sgJZgaxAViArkBXICmQFNCnwD4PKp2cwdfH0AAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>
              </div>
              <p
                class="font-normal text-white font-sofia leading-lg text-right text-[10.8521px]"
              >
                120
              </p>
            </div>
            <div class="gap-[5.79px] flex flex-col items-center justify-center">
              <div
                class="w-[28.97px] h-[28.97px] flex items-center justify-center"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3126_1072)">
                    <path
                      d="M11.9968 4.1388C11.9968 2.37347 10.5675 0.944214 8.80221 0.944214H7.16822C5.37535 0.944214 3.65591 1.65643 2.38817 2.92418C1.12042 4.19193 0.408203 5.91136 0.408203 7.70423L0.408203 26.0528H2.33964V29.9157H4.27107V26.0528H6.2025V14.4642H8.13393C9.15843 14.4642 10.141 14.0573 10.8654 13.3328C11.5898 12.6084 11.9968 11.6259 11.9968 10.6014V4.1388Z"
                      fill="white"
                    />
                    <path
                      d="M20.9856 0.944458C19.2203 0.944458 17.791 2.37372 17.791 4.13905V10.6016C17.791 11.6261 18.198 12.6087 18.9224 13.3331C19.6469 14.0575 20.6294 14.4645 21.6539 14.4645H23.5853V26.0531H25.5167V29.916H27.4482V26.0531H29.3796V7.70447C29.3796 5.91161 28.6674 4.19217 27.3997 2.92442C26.1319 1.65667 24.4125 0.944458 22.6196 0.944458H20.9856Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3126_1072">
                      <rect
                        width="28.9715"
                        height="28.9715"
                        fill="white"
                        transform="translate(0.408203 0.944336)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p
                class="font-normal text-white font-sofia leading-lg text-right text-[10.8521px]"
              >
                30
              </p>
            </div>
            <div class="gap-[5.79px] flex flex-col items-center justify-center">
              <div
                class="w-[28.97px] h-[28.97px] flex items-center justify-center"
              >
                <svg
                  width="36"
                  height="36"
                  class="active-back"
                  viewBox="0 0 36 36"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <linearGradient id="gradient" x2="1" y2="1">
                    <stop offset="2.17%" stop-color="#f10f47" />
                    <stop offset="100%" stop-color="#ff4775" />
                  </linearGradient>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.38281 18.3239C3.38281 10.679 9.49176 3.78979 17.9224 3.78979C26.1644 3.78979 32.404 10.5482 32.404 18.2803C32.404 27.2478 25.0906 32.8144 17.8934 32.8144C15.5136 32.8144 12.8727 32.1749 10.7542 30.925C10.0141 30.4744 9.39019 30.1401 8.59211 30.4017L5.66097 31.2738C4.92093 31.5063 4.25345 30.925 4.47111 30.1401L5.44331 26.8845C5.60293 26.4339 5.57391 25.9543 5.34174 25.5764C4.09383 23.28 3.38281 20.7656 3.38281 18.3239ZM16.0071 18.3241C16.0071 19.356 16.8342 20.1844 17.8645 20.199C18.8947 20.199 19.7218 19.356 19.7218 18.3386C19.7218 17.3067 18.8947 16.4782 17.8645 16.4782C16.8487 16.4637 16.0071 17.3067 16.0071 18.3241ZM22.6966 18.3386C22.6966 19.356 23.5237 20.199 24.554 20.199C25.5842 20.199 26.4113 19.356 26.4113 18.3386C26.4113 17.3067 25.5842 16.4782 24.554 16.4782C23.5237 16.4782 22.6966 17.3067 22.6966 18.3386ZM11.175 20.1993C10.1593 20.1993 9.31768 19.3563 9.31768 18.3389C9.31768 17.307 10.1448 16.4785 11.175 16.4785C12.2053 16.4785 13.0324 17.307 13.0324 18.3389C13.0324 19.3563 12.2053 20.1847 11.175 20.1993Z"
                  />
                </svg>
              </div>
              <p
                class="font-normal text-gradient font-sofia leading-lg text-right text-[10.8521px]"
              >
                3
              </p>
            </div>
            <div class="gap-[5.79px] flex flex-col items-center justify-center">
              <div
                class="w-[28.97px] h-[28.97px] flex items-center justify-center"
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.9271 12.636C23.9271 16.0459 21.209 18.7801 17.8192 18.7801C14.4294 18.7801 11.7113 16.0459 11.7113 12.636C11.7113 9.22474 14.4294 6.49314 17.8192 6.49314C21.209 6.49314 23.9271 9.22474 23.9271 12.636ZM17.8194 29.7128C12.8405 29.7128 8.58929 28.9233 8.58929 25.7656C8.58929 22.6067 12.8132 21.7885 17.8194 21.7885C22.7982 21.7885 27.0495 22.5779 27.0495 25.7369C27.0495 28.8946 22.8255 29.7128 17.8194 29.7128ZM26.5375 12.7468C26.5375 14.4851 26.019 16.1045 25.1095 17.4507C25.016 17.5892 25.0992 17.7761 25.2642 17.8048C25.4915 17.8441 25.7267 17.8663 25.9658 17.8728C28.35 17.9355 30.4899 16.392 31.081 14.0682C31.9568 10.6164 29.3855 7.51754 26.1113 7.51754C25.7553 7.51754 25.4149 7.55544 25.0836 7.62341C25.0381 7.63386 24.99 7.65477 24.964 7.69529C24.9328 7.74496 24.9562 7.81161 24.9874 7.85474C25.971 9.24146 26.5375 10.9327 26.5375 12.7468ZM30.486 20.2981C32.088 20.6131 33.1418 21.2562 33.5783 22.1907C33.9473 22.9579 33.9473 23.8479 33.5783 24.6138C32.9105 26.0633 30.7576 26.5286 29.9208 26.6488C29.748 26.6749 29.609 26.5246 29.6272 26.3508C30.0547 22.3344 26.6545 20.4301 25.7748 19.9923C25.7372 19.9727 25.7294 19.9426 25.7333 19.9243C25.7359 19.9113 25.7515 19.8904 25.78 19.8864C27.6835 19.8511 29.7299 20.1125 30.486 20.2981ZM9.82116 17.8726C10.0602 17.8661 10.2941 17.8452 10.5228 17.8047C10.6878 17.7759 10.7709 17.589 10.6774 17.4505C9.76789 16.1043 9.24948 14.4849 9.24948 12.7466C9.24948 10.9325 9.81597 9.24128 10.7995 7.85457C10.8307 7.81143 10.8528 7.74478 10.8229 7.69511C10.7969 7.6559 10.7475 7.63368 10.7034 7.62323C10.3708 7.55526 10.0303 7.51736 9.67434 7.51736C6.40016 7.51736 3.82888 10.6162 4.7059 14.068C5.29707 16.3918 7.43698 17.9354 9.82116 17.8726ZM10.0531 19.9234C10.057 19.943 10.0492 19.9718 10.0129 19.9927C9.13194 20.4305 5.73173 22.3348 6.15919 26.3499C6.17738 26.525 6.03966 26.674 5.86685 26.6492C5.03012 26.5289 2.87721 26.0636 2.20938 24.6142C1.83908 23.847 1.83908 22.9582 2.20938 22.191C2.64594 21.2565 3.69835 20.6135 5.30037 20.2972C6.05785 20.1129 8.10291 19.8515 10.0077 19.8868C10.0362 19.8907 10.0505 19.9116 10.0531 19.9234Z"
                    fill="white"
                  />
                </svg>
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
import EcouteNavbar from "~/components/EcouteNavbar.vue";

export default Vue.extend({
  components: { EcouteNavbar },
  name: "EcouteIndexPage",
  layout: "app",
  head() {
    return {
      title: "Ecoute - Eclairia",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "EcoutePage",
          name: "EcoutePage",
          content: "Ecoute",
        },
      ],
    };
  },
  data() {
    return {
      item: {
        title: "Rythme et histoque",
        username: "Roger Kalamu",
        description:
          "Episode 1 : La place de la femme dans le code avec Tchepda Flavie. #Internet #Web #UXdesign pour les nuls. Avec @flavie_flav",
        id: "2",
        langue: "Wolof",
        eclaire: 10,
        url: "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
        profil:
          "/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
        active: false,
      } as {
        title: string;
        username: string;
        description: string;
        id: string;
        eclaire: number;
        active: boolean;
        url: string;
        langue: string;
        profil: string;
      },
      comment: "",
      password: "",
      loading: false,
      errors: {
        username: "" as string | null,
        password: "" as string | null,
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
    setPlayer(item: any) {
      this.$store.commit("player/SET_SONG", item);
      if (!this.currentStatut) this.$store.commit("player/SET_STATUT");
      this.$store.commit("player/SET_MINIATURE", true);
    },
  },
});
</script>
<style scoped>
.shaddow-custom {
  box-shadow: -5.7943px -5.7943px 17.3829px rgba(255, 239, 239, 0.03),
    5.7943px 5.7943px 17.3829px rgba(0, 0, 0, 0.3);
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
</style>

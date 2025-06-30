<template>
  <div class="flex flex-col pl-[18.19px] pt-[26px] pr-[12px] pb-[18px]">
    <p class="font-bold text-[18.1935px] leading-[120%]">
      Bon retour Monsieur {{ profil.username }}
    </p>
    <div class="flex flex-col pt-[24.26px] space-y-[8px] w-full">
      <div
        class="flex max-w-[312.32px] font-sofia py-[6.06px] items-center min-h-[48.52px] w-full my-item space-x-[6.06px] px-[6px]"
      >
        <svg
          width="38"
          height="37"
          viewBox="0 0 38 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <mask
            id="mask0_3128_1033-myprofil-energie"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="38"
            height="37"
          >
            <rect
              x="0.838379"
              y="0.516113"
              width="36.3871"
              height="36.3871"
              fill="url(#pattern0-myprofil-energie)"
            />
          </mask>
          <g mask="url(#mask0_3128_1033-myprofil-energie)">
            <rect
              x="0.838379"
              y="0.516113"
              width="40.1224"
              height="40.1224"
              fill="#FFC000"
            />
          </g>
          <defs>
            <pattern
              id="pattern0-myprofil-energie"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_3128_1033"
                transform="scale(0.01)"
              />
            </pattern>
            <image
              id="image0_3128_1033"
              width="100"
              height="100"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNBJREFUeAHtnbtrVEEUh3fFR6GYSiOiYEDr+CgklWtjbaX+BWIlGBGMUQw+UKOCNmIjpNEiKFipiI9WfEVbX1hpFCsfRRSzfoe4ZJPsTnaz2ZlzZmZg2Hvv3HvnnN835z5O7r0pFHLJCmQFsgJZgaxAViArkBWYfwWK87/LsHssl8ubsKCTOlIsFr+EtSbh3gHRQX1ArZQxJg4mLElY1xF/qEKi6nec6VJYyxLsHdG7qX+rQFRPXrIkyQJLxjpsHaStni+rHdupa6rnhDpD6xlEKJRo21Gv3dpy00CAIVeJF6yJ7rLXNBAc203d4nLQWptZIETHIsQ+aU3w2ew1CwTH9lLXz+agtXaTQIiOZQh91JrYjdhrEgiOyR34qkYctLaOOSBExwpE7rUmdKP2mgOCY8eoyxt10Np6poAQHV0ILCfzaIspIFA4TV0SLQ0cMwOE6OjGXrkRjLqYAQIFVwIxGkgmgBAdJRSPJoHoGj3qgQBDEohnXU7E1KYeCGLLeWNrTKK7fFENhOiIMoFoFgiGR5lANAmE6Ig2gWgSCEZHm0A0B4ToiDqBaA4IBkedQDQFhOhYh8FRJxBNAcHY6BOIZoAQHZJA3OMyOPY2bTeGSSQQXYNKDRCio4ShSSQQ1QMBRlIJRPVAMHAXNZkEomogREdyCUTVQDBO7jk2uIxMqS3oSZ3oSDKB6BpgC12NHtoO0Ee7n0DsAfzwHHz5zDa3eXH08Ry2nfMmcnUTpCCSJBDfUTU/9FbGvkNAuehLpJBALuPkfl+OttDPb7ZdC5SvLeyj4U2DnEOIji4s3NewlWFXXEz38u67lxIECJ7JizbiqJUy6stQ74csomMjzr2ghhoMzWr7lMOVt5vWEKKcMwRD4PU1S7CV9b0CITq2YaylBOIdouNRKwI3u63XQxZAnmCgt/BvVoxp648zvxkgr6ctb+ustwj5f+6wAkNEv+EbhnTqDQh9dUqHRsoYdsqDFt6LTyCv8E5usiyUq0THxxCGegOCg/IxsSNUSUdoLt8x7lQoA70mF4FykXOJ3IPspM7lKz09bLemzWKdx85vbe4jjt0Dc5jazvKJnS8NqZa3Q1ZIJ5vo+wTR8auJ9ed91QxkUtI3TF6bnA0zlYFM6t5PdPyZnA0zlYFM6P6Mn1thEEztNQOZ0KOP6FBxOZ6BFAp3gfFw6jgNN5c6EEkg9oeTf2bPqQO5TnSMzJQl3JKUgUhebSCc9LV7ThnIFaLjQ21Zwi1NFcgPJD8TTvb6PacKZJDo8PKcVX3pa7ekCERAyEN6KkuKQI4THXLIUllSA/IWCsETiK6RkBoQFQnEDGRCAUkg3nSJoaEtpQhRk0B0gU8FyD1O5GoSiKkDUZdATB2IPIH40iWCprbYD1kqE4iuARA7EEkgvncJoK0tZiA/EVtlAtE1CGIGojaBmCIQSSCa+g+fFUixRsiA5gRiRfxavzECkb8Cqk4g1gJRWRYjkMNEh1zumiyxAXkOBfUJRNdIiQ2IRIeKJxBdorvaYgJiJoEYExD5ZFKtIlGh6gnEWkZGt4y3m7ZTx2u8QjUUnbNWHAJGL3WsCsp9pjus2D+bnV6/5DCbMY22A2Al68onk0Y5iXv90kKjNub1sgJZgaxAViArkBXICmQFNCnwD4PKp2cwdfH0AAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>

        <p class="font-normal text-[13.6452px] leading-[100%]">
          {{ profil.energie }} energies restantes.
        </p>
      </div>
      <div
        class="flex max-w-[312.32px] font-sofia py-[6.06px] items-center min-h-[48.52px] w-full my-item space-x-[6.06px] pl-[47.82px] pr-[6px]"
      >
        <p class="font-normal text-[13.6452px] leading-[120%]">
          {{ profil.stat }}% de vos auditeurs proviennent du pays
          Cameroun.
        </p>
      </div>
      <div
        class="flex max-w-[312.32px] font-sofia py-[6.06px] items-center min-h-[48.52px] w-full my-item space-x-[6.06px] px-[6px]"
      >
        <svg
          width="38"
          height="37"
          viewBox="0 0 38 37"
          fill="none"
          class="min-h-[37px] min-w-[38px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.8679 5.17122C20.1172 3.64995 17.9479 3.64997 17.1971 5.17122L13.6221 12.4149L5.62827 13.5764C3.94946 13.8204 3.27913 15.8835 4.49392 17.0676L10.2783 22.7059L8.91279 30.6676C8.62603 32.3396 10.381 33.6146 11.8826 32.8252L19.0325 29.0662L26.1824 32.8252C27.684 33.6146 29.4389 32.3396 29.1521 30.6676L27.7866 22.7059L33.571 17.0676C34.7859 15.8835 34.1154 13.8204 32.4366 13.5764L24.4428 12.4149L20.8679 5.17122ZM2.60371 6.20047C2.2114 6.69085 2.2909 7.40642 2.7813 7.79873L6.57162 10.831C7.062 11.2233 7.77756 11.1438 8.16988 10.6534C8.56219 10.163 8.48268 9.44746 7.99229 9.05515L4.20197 6.02289C3.71158 5.63058 2.99601 5.71008 2.60371 6.20047ZM35.4602 28.0889C35.8526 27.5985 35.773 26.8829 35.2827 26.4906L31.4924 23.4584C31.0019 23.066 30.2864 23.1456 29.8941 23.6359C29.5017 24.1264 29.5813 24.8419 30.0716 25.2342L33.8619 28.2665C34.3524 28.6587 35.0678 28.5793 35.4602 28.0889ZM2.7813 26.4906C2.2909 26.8829 2.2114 27.5985 2.60371 28.0889C2.99601 28.5793 3.71158 28.6587 4.20197 28.2665L7.99229 25.2342C8.48268 24.8419 8.56219 24.1264 8.16988 23.6359C7.77756 23.1456 7.062 23.066 6.57162 23.4584L2.7813 26.4906ZM35.4602 6.20047C35.8526 6.69085 35.773 7.40642 35.2827 7.79873L31.4924 10.831C31.0019 11.2233 30.2864 11.1438 29.8941 10.6534C29.5017 10.163 29.5813 9.44746 30.0716 9.05515L33.8619 6.02289C34.3524 5.63058 35.0678 5.71008 35.4602 6.20047Z"
            fill="#FFC000"
          />
        </svg>
        <p
          class="font-normal text-[13.6452px] leading-[120%] max-w-[257.74px]"
        >
          Avec au total 430 commentaires, vous êtes la nouvelle étoile
          montante de la
          <span class="font-bold text-mask">technologie</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ProfileDetailsInfos',
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
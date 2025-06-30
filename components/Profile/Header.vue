<template>
  <div>
    <div class="h-[138px] relative w-full">
      <nuxt-img
        provider="imgix"
        alt="image"
        sizes="sm:355px md:320px lg:480px"
        src="/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
        class="absolute w-full h-[138px] object-cover"
      />
    </div>
    <div
      class="flex px-[27px] pb-[23px] pt-[8px] items-center justify-between space-x-[8px]"
    >
      <div class="flex relative items-center space-x-[8px]">
        <div
          v-if="previewImage"
          class="object-contain w-[64px] -mt-[40px] h-[64px] bg-center bg-cover rounded-full"
          :style="{ 'background-image': `url(${previewImage})` }"
        />
        <div
          v-else
          class="h-[64px] -mt-[40px] w-[64px] relative rounded-full"
        >
          <nuxt-img
            alt="img bg"
            sizes="sm:355px md:320px lg:480px"
            provider="imgix"
            src="/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
            class="h-[64px] w-[64px] relative rounded-full object-cover"
          />
        </div>
        <input
          id="file"
          :accept="validExtensions"
          type="file"
          hidden
          @change="onChange"
        />
        <label
          for="file"
          class="absolute -right-[16px] -bottom-[5px] bg-[#05114D] w-[33.18px] h-[33.18px] rounded-full items-center justify-center flex"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.23368 17.2495L15.5222 7.8241C15.9183 7.31583 16.0591 6.72819 15.9271 6.12985C15.8126 5.58591 15.4781 5.06872 14.9764 4.67636L13.7529 3.7044C12.6878 2.85727 11.3674 2.94644 10.6104 3.91841L9.79173 4.98044C9.6861 5.1133 9.7125 5.30948 9.84454 5.41648C9.84454 5.41648 11.9131 7.07507 11.9571 7.11073C12.098 7.24449 12.2036 7.42283 12.23 7.63684C12.274 8.05595 11.9836 8.4483 11.5522 8.5018C11.3498 8.52855 11.1561 8.46614 11.0153 8.35021L8.84106 6.62029C8.73543 6.54093 8.57698 6.55787 8.48896 6.66488L3.32188 13.3527C2.98739 13.7718 2.87295 14.3158 2.98739 14.8419L3.64757 17.7043C3.68278 17.8559 3.81482 17.9629 3.97327 17.9629L6.8781 17.9272C7.40625 17.9183 7.89919 17.6775 8.23368 17.2495ZM12.3011 16.3581H17.0377C17.4999 16.3581 17.8757 16.7389 17.8757 17.2071C17.8757 17.6761 17.4999 18.056 17.0377 18.056H12.3011C11.839 18.056 11.4631 17.6761 11.4631 17.2071C11.4631 16.7389 11.839 16.3581 12.3011 16.3581Z"
              fill="white"
            />
          </svg>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ProfileHeader',
  data() {
    return {
      previewImage: null as string | ArrayBuffer | null,
      validExtensions: [
        "image/jpg",
        "image/png",
        "image/jpeg",
        ".png",
        ".jpg",
        ".jpeg",
      ],
      file: null as any,
      fileName: null as string | null,
      errors: {
        username: "" as string | null,
        password: "" as string | null,
        message: "" as string | null,
      },
    }
  },
  methods: {
    async loadDocument(isInput: boolean, event: any) {
      try {
        this.file = this.getFileToUpload(isInput, event);

        if (!this.file) return;

        const { type, name } = this.file;

        if (this.validExtensions.includes(type)) {
          const filesize = this.getFileSize(isInput, event); // size in MB
          
          if (Number.parseFloat(filesize) < 301) {
            this.fileName = name.substring(0, name.indexOf("."));

            const reader = new FileReader();
            reader.onload = (e) => {
              this.previewImage = e.target ? e.target.result : null;
            };
            reader.readAsDataURL(this.file ? this.file : new Blob());
          } else {
            this.errors.message = "La taille du fichier est trop grande";
          }
          // this.uploadTask()
        } else {
          this.errors.message = "Le format du fichier n'est supporté";
          this.file = null;
        }
      } catch (error) {
        console.log(error);
        this.errors.message = "erreur de traitement";
      }
    },
    getFileSize(isInput: boolean, event: any) {
      return isInput
            ? (event.target.files[0].size / 1024 / 1024).toFixed(4)
            : (event.dataTransfer.files[0].size / 1024 / 1024).toFixed(4)
    },
    getFileToUpload(isInput: boolean, event: any) {
      if (isInput) {
        return event.target.files
            ? event.target.files[0]
            : null
      }

      return event.dataTransfer.files[0]
    },
    async onChange(event: any) {
      await this.loadDocument(true, event)
    },
  }
})
</script>

<template>
  <div
    class="border-[0.820455px] mt-[25px] border-[#0036FF] w-full h-[60px] rounded-[11.4px] flex justify-center items-center py-[7.6px] px-[11.4px]"
  >
    <div
      class="flex items-center justify-center space-x-1 text-mask h-[36px]"
    >
      <span class="fa fa-volume-up text-lg icon-sound-speaker"></span>

      <p
        class="text-[18px] text-white h-[16px] leading-[90%] font-semibold"
      >
        {{ getAudioDuration() }}
      </p>
    </div>
    <div
      class="flex items-center text-negativeColor justify-center h-[36px] w-[190px] pl-2 relative top-[2px]"
    >
      <div class="absolut w-full container-progress">
        <div class="relative w-full h-[3px] negative-bg bg-inactive">
          <div
            class="absolute h-[3px] bg-player"
            :style="{ width: progressPercent + '%' }"
            id="progress"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="flex m-2 items-center rounded-[10px] bg-bgComment justify-center w-[33px] h-[36px] cursor-pointer"
      @click="togglePlayingAudio"
    >
      <span v-if="!playing" class="fa fa-play" style="color: #0036FF;"></span>
      <span v-else class="fa fa-pause" style="color: #0036FF;"></span>
    </div>

    <audio
      id="audio-player"
      controls
      @timeupdate="progressDuration"
    >
      <source id="audio-source" src="" />
    </audio>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PodcastAudioPlayer',
  props: {
    file: {
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      audioDuration: 0,
      audioPlayer: null as HTMLAudioElement | null,
      audioSource: null as HTMLSourceElement | null,
      audioUrlSource: '' as string,
      playing: false,
      progressPercent: 0
    }
  },
  computed: {
  },
  watch: {
    file() {
      this.loadAudioSource()
    }
  },
  methods: {
    loadAudioSource() {
      this.audioUrlSource = this.file
      this.audioPlayer = document.querySelector('#audio-player')
      this.audioSource = document.querySelector('#audio-source')

      this.audioSource?.setAttribute('src', this.audioUrlSource)
      this.audioPlayer?.load()
      this.audioPlayer?.addEventListener('loadedmetadata', (e) => {
        const duration = this.audioPlayer?.duration
        this.audioDuration = duration ? duration : 0 
      })
    },
    togglePlayingAudio() {
      this.playing = !this.playing

      if (this.playing) {
        this.audioPlayer?.play()
        return
      }

      this.audioPlayer?.pause()
    },
    formatTime(time: number): string {
      let hours = Math.floor(time / 3600)
      let mins = Math.floor(time % 3600) / 60
      let secs = Math.floor(time % 60)

      hours = Math.floor(hours)
      mins = Math.floor(mins)
      secs = Math.floor(secs)

      let secsStr = secs < 10 ? '0' + secs.toString() : secs.toString()
      let minsStr = mins < 10 ? '0' + mins.toString() : mins.toString()

      if (hours) {
        return hours.toString() + ':' + minsStr + ':' + secsStr
      }

      return minsStr + ':' + secsStr
    },
    getAudioDuration() {
      return this.formatTime(this.audioDuration)
    },
    progressDuration() {
      const time = this.audioPlayer?.currentTime
      const audioTime = time ? time : 0
      const fraction = audioTime / this.audioDuration
      this.progressPercent = Math.ceil(fraction * 100)
    }
  }
})
</script>

<style scoped>
.icon-sound-speaker {
  margin-top: 2px;
  font-size: 1.3rem;
  margin-right: 5px;
}
#audio-player {
  display: none;
}
.container-progress {
  top: 2px !important;
}
.bg-inactive {
  background: rgba(245, 245, 245, 0.16);
  transform: matrix(1, 0, 0, -1, 0, 0);
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
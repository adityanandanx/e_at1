<script setup>
import { useSlideInit } from '@/composables/useSlideInit'
import { images, theme } from '@/store'
import { ref } from 'vue'
import Cmd from './Cmd.vue'
import A from './themes/A.vue'
import B from './themes/B.vue'
import C from './themes/C.vue'
import D from './themes/D.vue'
import E from './themes/E.vue'
import F from './themes/F.vue'

useSlideInit()

const comps = {
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
}

const slide = ref(null)
const isFullscreen = ref(false)

const toggleFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen()
    isFullscreen.value = false
  } else {
    slide.value.requestFullscreen()
    isFullscreen.value = true
  }
}
</script>

<template>
  <div class="position-relative rounded overflow-hidden" ref="slide" style="height: 80vh">
    <Cmd />
    <component :is="comps[theme]" v-if="images.length" />
    <div class="position-absolute end-0 top-0">
      <button @click="toggleFullScreen" class="btn btn-dark m-3">
        {{ !isFullscreen ? 'Fullscreen' : 'Exit fullscreen' }}
      </button>
    </div>
  </div>
</template>

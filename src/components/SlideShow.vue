<script setup>
import { useSlideInit } from '@/composables/useSlideInit'
import A from './themes/A.vue'
import { images, index, mode, theme } from '@/store'
import ControlPanel from './ControlPanel.vue'
import FileSelect from './FileSelect.vue'
import B from './themes/B.vue'
import C from './themes/C.vue'
import D from './themes/D.vue'
import E from './themes/E.vue'
import F from './themes/F.vue'
import Ordering from './Ordering.vue'
import Cmd from './Cmd.vue'
import { ref } from 'vue'

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

const toggleFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    slide.value.requestFullscreen()
  }
}
</script>

<template>
  <div class="row">
    <div class="col-12 col-xl-4">
      <ControlPanel />
      <FileSelect />
      <Ordering />
    </div>
    <div class="col-12 col-xl-8 position-relative overflow-hidden" ref="slide" style="height: 80vh">
      <Cmd />
      <component :is="comps[theme]" v-if="images.length" />
      <div class="position-absolute end-0 top-0">
        <button @click="toggleFullScreen" class="btn btn-dark m-3">Toggle Fullscreen</button>
      </div>
    </div>
  </div>
</template>

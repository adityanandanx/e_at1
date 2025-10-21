<script setup>
import ControlPanel from '@/components/ControlPanel.vue'
import FileSelect from '@/components/FileSelect.vue'
import Ordering from '@/components/Ordering.vue'
import SlideShow from '@/components/SlideShow.vue'
import { ref } from 'vue'

const cpopen = ref(false)
</script>

<template>
  <main class="p-5">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="display-1">Slide Show</h1>
      <button class="btn" @click="cpopen = !cpopen" style="width: 64px; height: 64px">
        <img src="/setting-icon.png" alt="Settings icon" class="img-fluid" />
      </button>
    </div>
    <div class="row">
      <div
        class="col-12"
        :class="{
          'col-xl-12': !cpopen,
          'col-xl-8': cpopen,
        }"
      >
        <SlideShow />
      </div>

      <div v-show="cpopen" class="col-12 col-xl-4">
        <ControlPanel />
        <FileSelect />
        <Ordering />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { curImg } from '@/store'
</script>

<template>
  <transition name="c">
    <div :key="curImg.src" class="w-100 h-100 position-absolute">
      <img :src="curImg.src" :alt="curImg.caption" class="img-fluid w-100 h-100 object-fit-cover" />
    </div>
  </transition>
  <div
    :key="curImg.src + 'caption'"
    class="caption position-absolute bottom-0 start-0 bg-white text-capitalize px-4 py-2"
  >
    <transition name="c" appear v-for="(word, i) in curImg.caption.split(' ')" :key="word">
      <span class="d-inline-block" :style="{ transitionDelay: `${(i + 1) * 0.3}s` }"
        >{{ word }}&nbsp;</span
      >
    </transition>
  </div>
</template>

<style scoped>
.caption {
  border-top-right-radius: 1rem;
  /* display: flex;
  gap: 1rem; */
}

.c-enter-active,
.c-leave-active,
.c-enter-active .caption,
.c-leave-active .caption {
  transition: transform 0.3s ease;
}

.c-enter-from {
  transform: translateY(140%);
}
.c-enter-to {
  transform: translateY(0%);
}
.c-leave-from {
  transform: translateY(0%);
}
.c-leave-to {
  transform: translateY(-140%);
}
</style>

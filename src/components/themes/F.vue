<script setup lang="ts">
import { curImg } from '@/store'
</script>

<template>
  <transition name="f" :duration="1000">
    <div :key="curImg.src" class="w-100 h-100 position-absolute">
      <img :src="curImg.src" :alt="curImg.caption" class="img-fluid w-100 h-100 object-fit-cover" />
    </div>
  </transition>
  <transition name="f-caption" :duration="1000">
    <div
      :key="curImg.src + 'caption'"
      class="caption position-absolute start-0 bottom-0 bg-white text-capitalize px-4 py-2"
    >
      {{ curImg.caption }}
    </div>
  </transition>
</template>

<style scoped>
.caption {
  border-radius: 1rem;
  transform-origin: bottom left;
}

.f-enter-active {
  animation: enter 0.9s ease forwards;
}

.f-leave-active {
  animation: leave 0.9s ease forwards;
}

.f-caption-enter-active {
  animation: enterCaption 0.9s ease forwards;
}

.f-caption-leave-active {
  animation: leaveCaption 0.9s ease forwards;
  z-index: 8;
}

@keyframes enter {
  0% {
    scale: 0;
    rotate: 20deg;
  }
}
@keyframes leave {
  100% {
    rotate: -90deg;
    transform: translate(-100%, -100%);
    opacity: 0;
  }
}
@keyframes enterCaption {
  0% {
    transform: rotate(-360deg);
  }
}
@keyframes leaveCaption {
  100% {
    transform: translateY(100%);
  }
}
</style>

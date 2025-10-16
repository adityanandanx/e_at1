<script setup lang="ts">
import { curImg } from '@/store'
</script>

<template>
  <transition name="e" :duration="300">
    <div :key="curImg.src" class="w-100 h-100 position-absolute e">
      <img
        :src="curImg.src"
        :alt="curImg.caption"
        class="img-fluid w-100 h-100 position-absolute object-fit-cover left"
      />
      <img
        :src="curImg.src"
        :alt="curImg.caption"
        class="img-fluid w-100 h-100 position-absolute object-fit-cover right"
      />
    </div>
  </transition>
</template>

<style scoped>
.e {
  perspective: 1000px;
  z-index: 0;
}

.left {
  clip-path: xywh(0% 0% 50% 100%);
  transform-origin: left;
}
.right {
  clip-path: xywh(50% 0% 50% 100%);
  transform-origin: right;
}

.e-enter-active .left,
.e-leave-active .left,
.e-enter-active .right,
.e-leave-active .right {
  transition: transform 0.3s ease;
}

.e-leave-active {
  z-index: 2;
}

.e-leave-from .left {
  transform: rotateY(0deg);
}
.e-leave-to .left {
  transform: rotateY(123deg);
}
.e-leave-from .right {
  transform: rotateY(0deg);
}
.e-leave-to .right {
  transform: rotateY(-123deg);
}
</style>

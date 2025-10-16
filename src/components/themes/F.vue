<script setup lang="ts">
import { curImg } from '@/store'
</script>

<template>
  <transition name="f" :duration="900">
    <div :key="curImg.src" class="w-100 h-100 position-absolute">
      <img :src="curImg.src" :alt="curImg.caption" class="img-fluid w-100 h-100 object-fit-cover" />
      <div class="caption position-absolute bottom-0 start-0 bg-white text-capitalize px-4 py-2">
        {{ curImg.caption }}
      </div>
    </div>
  </transition>
</template>

<style scoped>
.caption {
  border-top-right-radius: 1rem;
}

.f-enter-active {
  animation: enter 0.3s ease forwards;
}

.f-leave-active {
  animation: leave 0.3s ease forwards;
}

.f-enter-active .caption {
  animation: enterCaption 0.3s ease forwards;
}

.f-leave-active .caption {
  animation: leaveCaption 0.3s ease forwards;
}

@keyframes enter {
  0% {
    rotate: 90deg;
    transform: translate(100%, 100%);
  }
}
@keyframes leave {
  100% {
    rotate: -90deg;
    transform: translate(-100%, -100%);
  }
}
@keyframes enterCaption {
  0% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0%, 0%);
  }
}
@keyframes leaveCaption {
  0% {
    transform: translate(0%, 0%);
  }
  100% {
    transform: translate(100%, 100%);
  }
}
</style>

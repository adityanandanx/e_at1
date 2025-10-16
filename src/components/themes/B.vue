<script setup lang="ts">
import { curImg, images, index } from '@/store'
import { computed } from 'vue'

// import { curImg } from '@/store'
// const curImg = computed(() => images.value[index.value])
</script>

<template>
  <transition name="b" :duration="600">
    <div :key="curImg.src" class="w-100 h-100 position-absolute">
      <img :src="curImg.src" :alt="curImg.caption" class="img-fluid w-100 h-100 object-fit-cover" />
      <div
        :style="{ transitionDelay: '0.3s' }"
        class="caption position-absolute bottom-0 start-0 bg-white text-capitalize px-4 py-2"
      >
        {{ curImg.caption }}
      </div>
    </div>
  </transition>
</template>

<style scoped>
.caption {
  border-top-right-radius: 1rem;
}

.b-enter-active,
.b-leave-active,
.b-enter-active .caption,
.b-leave-active .caption {
  transition: transform 0.3s ease;
}

.b-enter-from {
  transform: translateX(-100%);
}
.b-enter-to {
  transform: translateX(0%);
}
.b-leave-from {
  transform: translateX(0%);
}
.b-leave-to {
  transform: translateX(100%);
}

.b-enter-from .caption {
  transform: translateX(-100%);
}
.b-enter-to .caption {
  transform: translateX(0%);
}
.b-leave-from .caption {
  transform: translateX(0%);
}
.b-leave-to .caption {
  transform: translateX(100%);
}
</style>

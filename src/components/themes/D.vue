<script setup lang="ts">
import { images, index } from '@/store'
import { ref, watch } from 'vue'

const stack = ref([])

watch(
  [index],
  () => {
    stack.value.push({ ...images.value[index.value], deg: -5 + Math.random() * 10 })
  },
  { immediate: true },
)
</script>

<template>
  <transition v-for="curImg in stack" name="d" appear>
    <div
      :key="curImg.src"
      class="w-100 h-100 position-absolute d"
      :style="{ rotate: `${curImg.deg}deg` }"
    >
      <img :src="curImg.src" :alt="curImg.caption" class="img-fluid w-100 h-100 object-fit-cover" />
      <div class="caption position-absolute bottom-0 start-0 bg-white text-capitalize px-4 py-2">
        {{ curImg.caption }}
      </div>
    </div>
  </transition>
</template>

<style scoped>
.caption {
  width: 100%;
}
.d {
  scale: 0.85;
  border: 3px solid white;
  border-radius: 5px;
}

.d-enter-active,
.d-leave-active {
  transition: transform 0.3s ease;
}

.d-enter-from {
  transform: translateX(-100%);
}
.d-enter-to {
  transform: translateX(0%);
}
.d-leave-from {
  transform: translateX(0%);
}
.d-leave-to {
  transform: translateX(100%);
}
</style>

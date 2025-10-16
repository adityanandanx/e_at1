<script setup lang="ts">
import { curImg } from '@/store'
</script>

<template>
  <div class="w-100 h-100 position-relative">
    <img :src="curImg.src" :alt="curImg.caption" class="img-fluid w-100 h-100 object-fit-cover" />
    <div class="caption position-absolute bottom-0 start-0 bg-white text-capitalize px-4 py-2">
      {{ curImg.caption }}
    </div>
  </div>
</template>

<style scoped>
.caption {
  border-top-right-radius: 1rem;
}
</style>

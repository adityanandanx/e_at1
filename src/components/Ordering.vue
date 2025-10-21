<script setup>
import { images } from '@/store'
import { ref } from 'vue'

const selected = ref(null)
const target = ref(null)

const handleDragStart = (i) => {
  selected.value = i
}
const handleDragOver = (i) => {
  target.value = i
}
const handleDragEnd = () => {
  const temp = images.value[selected.value]
  images.value.splice(selected.value, 1)
  images.value.splice(target.value, 0, temp)
  target.value = null
  selected.value = null
}
</script>

<template>
  <h2 class="display-6">Order Photos</h2>
  <p>Drag and drop slides to re-arrange them</p>
  <div class="row g-2">
    <div class="col-4 col-md-3 col-xl-4" v-for="(img, i) in images">
      <img
        @dragstart="handleDragStart(i)"
        @dragover="handleDragOver(i)"
        @dragend="handleDragEnd(i)"
        draggable="true"
        :src="img.src"
        :alt="img.caption"
        class="img-fluid h-100 w-100 object-fit-cover rounded-3 user-select-none"
        :class="{
          'border border-info border-5': i === target,
        }"
      />
    </div>
  </div>
</template>

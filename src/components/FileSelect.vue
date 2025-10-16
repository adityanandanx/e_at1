<script setup>
import { images, index } from '@/store'

const addImage = (src, fname) => {
  const caption = fname.replaceAll('-', ' ').split('.')[0]
  //   console.log({ src, caption })
  images.value.push({ src, caption })
}
const loadSample = () => {
  addImage(
    '/basilique-notre-dame-de-fourviere-lyon.jpg',
    'basilique-notre-dame-de-fourviere-lyon.jpg',
  )
  addImage('/beautiful-view-in-lyon.jpg', 'beautiful-view-in-lyon.jpg')
  addImage('/place-bellecour-lyon.jpg', 'place-bellecour-lyon.jpg')
  addImage('/tour-metalique-lyon.jpg', 'tour-metalique-lyon.jpg')
}

const handleDrop = (e) => {
  const files = e.dataTransfer.files
  console.log(files)

  for (const f of files) {
    addImage(URL.createObjectURL(f), f.name)
  }
  index.value = 0
}

loadSample()
</script>

<template>
  <div class="row my-4">
    <div
      class="col-12 card vstack align-items-center justify-content-center"
      style="height: 10rem"
      @drop.prevent="handleDrop"
      @dragover.prevent=""
    >
      <h2>Drop files here</h2>
      <button class="btn btn-primary" @click="loadSample">Load Sample</button>
    </div>
  </div>
</template>

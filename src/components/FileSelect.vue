<script setup>
import { images, index } from '@/store'

const formatCaption = (fname) => {
  return fname.replaceAll('-', ' ').split('.')[0]
}

const samples = [
  {
    src: '/basilique-notre-dame-de-fourviere-lyon.jpg',
    caption: formatCaption('basilique-notre-dame-de-fourviere-lyon.jpg'),
  },
  {
    src: '/beautiful-view-in-lyon.jpg',
    caption: formatCaption('beautiful-view-in-lyon.jpg'),
  },
  {
    src: '/place-bellecour-lyon.jpg',
    caption: formatCaption('place-bellecour-lyon.jpg'),
  },
  {
    src: '/tour-metalique-lyon.jpg',
    caption: formatCaption('tour-metalique-lyon.jpg'),
  },
]

const addImage = (src, fname) => {
  const caption = formatCaption(fname)
  images.value.push({ src, caption })
}

const loadSample = () => {
  images.value = samples
}

const handleDrop = (e) => {
  const files = e.dataTransfer.files
  const temp = []
  for (const f of files) {
    temp.push({ src: URL.createObjectURL(f), caption: formatCaption(f.name) })
  }
  images.value = temp
  index.value = 0
}

// loadSample()
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

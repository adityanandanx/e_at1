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

const handleFiles = (files) => {
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
  <h2 class="display-6 mt-4">Add Photos</h2>
  <div class="row mb-4">
    <input
      type="file"
      name="files"
      id="files"
      placeholder="Slides"
      class="form-control"
      multiple
      @change="(e) => handleFiles(e.target.files)"
    />
    <div
      class="col-12 card vstack align-items-center justify-content-center"
      style="height: 10rem"
      @drop.prevent="(e) => handleFiles(e.dataTransfer.files)"
      @dragover.prevent=""
    >
      <h2>Drop files here</h2>
      <button class="btn btn-primary" @click="loadSample">Load Sample</button>
    </div>
  </div>
</template>

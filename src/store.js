import { computed, ref } from 'vue'

export const images = ref([])
export const mode = ref('manual')
export const theme = ref('a')
export const index = ref(0)

export const curImg = computed(() => images.value[index.value])

export const nextSlide = () => {
  if (images.value.length) index.value = (index.value + 1) % images.value.length
  else {
    index.value = 0
  }
}
export const prevSlide = () => {
  if (images.value.length)
    index.value = (index.value - 1 + images.value.length) % images.value.length
  else {
    index.value = 0
  }
}

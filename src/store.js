import { computed, ref } from 'vue'

export const images = ref([])
export const mode = ref('auto')
export const theme = ref('b')
export const index = ref(0)

export const curImg = computed(() => images.value[index.value])

export const nextSlide = () => {
  index.value = (index.value + 1) % images.value.length
}
export const prevSlide = () => {
  index.value = (index.value - 1 + images.value.length) % images.value.length
}

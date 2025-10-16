import { images, index, mode, nextSlide, prevSlide, theme } from '@/store'
import { computed, onMounted, onUnmounted, watch } from 'vue'

export const useSlideInit = () => {
  const handleKeyup = (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide()
    }
    if (e.key === 'ArrowLeft') {
      prevSlide()
    }
  }

  const startManual = () => {
    window.removeEventListener('keyup', handleKeyup)
    window.addEventListener('keyup', handleKeyup)
  }

  let intervalId = null

  const startAuto = () => {
    if (intervalId !== null) {
      clearInterval(intervalId)
    }
    intervalId = setInterval(nextSlide, 2000)
  }

  const startRandom = () => {
    if (intervalId !== null) {
      clearInterval(intervalId)
    }
    intervalId = setInterval(() => {
      const choices = images.value.map((_, i) => i).filter((i) => i !== index.value)
      index.value = choices[~~(Math.random() * choices.length)]
    }, 2000)
  }

  const clear = () => {
    if (intervalId) {
      clearInterval(intervalId)
    }
    window.removeEventListener('keyup', handleKeyup)
  }

  const start = () => {
    switch (mode.value) {
      case 'manual':
        startManual()
        break
      case 'auto':
        startAuto()
        break
      case 'random':
        startRandom()
        break

      default:
        break
    }
  }

  watch(
    [mode, theme],
    () => {
      index.value = 0
      clear()
      start()
    },
    { immediate: true },
  )

  onUnmounted(() => {
    clear()
  })
}

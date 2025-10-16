<script setup>
import { mode, theme } from '@/store'
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

const commands = [
  { text: 'Change to manual control mode', action: () => (mode.value = 'manual') },
  { text: 'Change to auto-playing mode', action: () => (mode.value = 'auto') },
  { text: 'Change to random playing mode', action: () => (mode.value = 'random') },
  { text: 'Switch to theme A', action: () => (theme.value = 'a') },
  { text: 'Switch to theme B', action: () => (theme.value = 'b') },
  { text: 'Switch to theme C', action: () => (theme.value = 'c') },
  { text: 'Switch to theme D', action: () => (theme.value = 'd') },
  { text: 'Switch to theme E', action: () => (theme.value = 'e') },
  { text: 'Switch to theme F', action: () => (theme.value = 'f') },
]

const show = ref(false)
const query = ref('')
const selected = ref(0)
const inp = ref(null)

const handleKeydown = (e) => {
  if ((e.key === 'k' && e.ctrlKey) || e.key === '/') {
    e.preventDefault()
    show.value = !show.value
    nextTick(() => {
      inp.value.focus()
    })
  } else if (e.key === 'Escape') {
    e.preventDefault()
    show.value = false
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault()
    selected.value = (selected.value - 1 + commands.length) % commands.length
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selected.value = (selected.value + 1) % commands.length
  }
  if (e.key === 'Enter') {
    e.preventDefault()
    filtered.value[selected.value].action()
    show.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

const filtered = computed(() =>
  commands.filter((c) => c.text.toLowerCase().includes(query.value.toLowerCase())),
)
watch(query, () => {
  selected.value = 0
})
</script>

<template>
  <div v-if="show" class="backdrop" @click.self="show = false">
    <div class="content rounded shadow">
      <input
        v-model="query"
        type="text"
        class="form-control mb-2"
        placeholder="Start typing..."
        autofocus
        ref="inp"
      />
      <ul class="list-inline">
        <li
          v-for="(cmd, i) in filtered"
          class="px-3 py-2 rounded"
          :class="{ 'bg-info': i === selected }"
        >
          {{ cmd.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.479);
  z-index: 5;
}

.content {
  max-width: 512px;
  width: 100%;
  background-color: white;
  padding: 1rem;
  z-index: 10;
}
</style>

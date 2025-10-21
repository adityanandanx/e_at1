<script setup>
import { mode, theme } from '@/store'
</script>

<template>
  <h2 class="display-6">Control Panel</h2>
  <div class="">
    <label class="form-label">Select Mode</label>
    <div class="row gap-2">
      <button
        class="btn col"
        :class="{
          'btn-primary': m === mode,
          'btn-outline-primary': m !== mode,
        }"
        :aria-checked="mode === m"
        style="text-transform: capitalize"
        @click="mode = m"
        v-for="m in ['manual', 'random', 'auto']"
      >
        {{ m }}
      </button>
    </div>
    <label class="form-label">Select Theme</label>
    <div class="row gap-2">
      <button
        class="btn col"
        :class="{
          'btn-primary': t === theme,
          'btn-outline-primary': t !== theme,
        }"
        :aria-checked="t === theme"
        style="text-transform: capitalize"
        @click="theme = t"
        v-for="t in ['a', 'b', 'c', 'd', 'e', 'f']"
      >
        {{ t }}
      </button>
    </div>
  </div>
</template>

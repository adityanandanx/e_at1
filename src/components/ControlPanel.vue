<script setup>
import { mode, theme } from '@/store'
</script>

<template>
  <div class="row g-2">
    <div class="col-6">
      <label class="form-label">Select Mode</label>
      <select class="form-select" v-model="mode" placeholder="Mode">
        <option value="manual">Manual</option>
        <option value="auto">Auto</option>
        <option value="random">Random</option>
      </select>
    </div>
    <div class="col-6">
      <label class="form-label">Select Theme</label>
      <select class="form-select" v-model="theme" placeholder="Theme">
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="d">D</option>
        <option value="e">E</option>
        <option value="f">F</option>
      </select>
    </div>
  </div>
</template>

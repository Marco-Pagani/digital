<template>
  <div
    class="rounded-lg w-[450px] p-6 pt-4 shadow-md"
    :class="`${bgColors[color]}`"
  >
    <header class="flex justify-between">
      <h2 class="text-xl">{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </header>
    <ul class="font-handwritten text-xl" v-if="showList">
      <card-task
        v-for="index in 10"
        :colors="{ base: bgColors[color], focus: focusColors[color] }"
        :key="index"
      />
    </ul>
  </div>
</template>

<script setup>
import CardTask from './card-task.vue'
defineProps({
  title: String,
  subtitle: String,
  color: Number,
  showList: Boolean
})
const bgColors = ['bg-light-brown', 'bg-medium-brown', 'bg-dark-brown']
const focusColors = ['bg-medium-brown', 'bg-dark-brown', 'bg-light-brown']
const textColors = ['text-light-brown', 'text-medium-brown', 'text-dark-brown']
</script>

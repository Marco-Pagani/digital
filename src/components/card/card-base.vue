<template>
  <div class="rounded-lg w-[450px] p-6 pt-4 shadow-md" :class="`${bgColors[color]}`">
    <header class="flex justify-between">
      <h2 class="text-xl">{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </header>
    <ul class="font-handwritten text-xl" v-if="showList">
      <li v-for="index in 10" :key="index" class="flex w-full gap-6 p-3 rounded-lg mt-3"
        :class="`focus-within:${focusColors[color]}`">
        <span>0</span>
        <input type="text" class=" border-b border-off-black grow px-3"
          :class="`${bgColors[color]} focus:${focusColors[color]}`" />
      </li>
    </ul>
  </div>
</template>

<script setup>
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

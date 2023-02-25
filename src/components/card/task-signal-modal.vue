<template>
  <ul class="flex gap-4 h-[30px] items-center bg-white p-6 rounded-full shadow">
    <li v-for="(icon, index) in icons" :key="index" class="flex justify-center">
      <font-awesome-icon
        :icon="icon"
        @click="$emit('change-icon', index)"
      ></font-awesome-icon>
    </li>
  </ul>
</template>

<script setup>
const icons = [
  ['far', 'circle'],
  ['fas', 'circle-half-stroke'],
  ['far', 'circle-dot'],
  ['fas', 'circle-dot'],
  ['far', 'clock'],
  ['fas', 'circle']
]
</script>

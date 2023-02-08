<template>
  <font-awesome-icon :icon="icons[icon]"></font-awesome-icon>
</template>

<script setup>
defineProps({
  icon: Number
})

const icons = [
  ['far', 'circle'],
  ['fas', 'circle-half-stroke'],
  ['far', 'circle-dot'],
  ['fas', 'circle-dot'],
  ['far', 'clock'],
  ['fas', 'circle'],
]
</script>

<template>
  <button class="rounded-full p-4 w-14 grow-0 shadow-lg" :class="bgColor">
    <font-awesome-icon :icon="icon"></font-awesome-icon>
  </button>
</template>

<script setup>
const props = defineProps({
  icon: Array,
  type: Number
})

const bgColor = ['bg-light-brown', 'bg-medium-brown', 'bg-dark-brown'].at(
  props.type
)
</script>

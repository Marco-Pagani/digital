<template>
  <div
    class="rounded-lg w-[450px] p-6 pt-4 shadow-md"
    :class="`${bgColors[cardType]}`"
  >
    <header class="flex justify-between">
      <h2 class="text-xl">{{ title }}</h2>
      <p>{{ cardData.header }}</p>
    </header>
    <ul class="font-handwritten text-xl" v-if="showList">
      <card-task
        v-for="(item, index) in cardData.todos"
        :colors="{ base: bgColors[cardType], focus: focusColors[cardType] }"
        :key="index"
        v-model:item-text="item.text"
        v-model:item-status="item.status"
      />
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import CardTask from './card-task.vue'
const props = defineProps({
  cardData: Object,
  cardType: Number,
  showList: Boolean
})
const title = computed(() => {
  if (props.cardType === 0) return 'Now'
  if (props.cardType === 1) return 'Later'
  if (props.cardType === 2) return 'Eventually'
  return 'Error'
})

const bgColors = ['bg-light-brown', 'bg-medium-brown', 'bg-dark-brown']
const focusColors = ['bg-medium-brown', 'bg-dark-brown', 'bg-light-brown']
const textColors = ['text-light-brown', 'text-medium-brown', 'text-dark-brown']
</script>

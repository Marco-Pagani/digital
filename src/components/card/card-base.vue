<template>
  <div
    class="rounded-lg w-[90vw] max-w-[480px] h-[750px] px-6 pt-4 pb-8 shadow-md"
    :class="bgColor"
  >
    <header class="flex justify-between px-2">
      <h2 class="text-xl">{{ title }}</h2>
      <input
        v-model="todos[cardData.index].header"
        :disabled="cardData.type === 0"
        aria-label="title of the card"
        class="border-b w-28 text-right bg-transparent"
      />
    </header>
    <ul class="font-handwritten text-xl">
      <card-task
        v-for="(item, index) in todos[cardData.index].items"
        :key="index"
        :index="index"
        v-model:item-text="item.text"
        v-model:item-status="item.status"
      />
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTodos } from '@/stores/tasks.js'
import CardTask from './card-task.vue'

const todos = useTodos()

const props = defineProps({
  cardData: Object
})

const title = computed(() => {
  if (props.cardData.type === 0) return 'Now'
  if (props.cardData.type === 1) return 'Later'
  if (props.cardData.type === 2) return 'Eventually'
  return 'Error'
})

const bgColor = computed(() =>
  ['bg-light-brown', 'bg-medium-brown', 'bg-dark-brown'].at(props.cardData.type)
)
const focusColor = computed(() =>
  ['bg-medium-brown', 'bg-dark-brown', 'bg-light-brown'].at(props.cardData.type)
)
const textColor = computed(() =>
  ['text-light-brown', 'text-medium-brown', 'text-dark-brown'].at(
    props.cardData.type
  )
)
</script>

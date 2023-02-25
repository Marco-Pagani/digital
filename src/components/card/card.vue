<template>
  <div
    class="rounded-lg w-[90vw] max-w-[480px] h-[750px] px-6 pt-4 pb-8 shadow-md bg-gradient-to-br from-light-brown to-medium-brown"
  >
    <header class="flex justify-between px-2">
      <h2 class="text-xl">{{ title }}</h2>
      <input
        :value="cardHeader"
        @input="$emit('update:card-header', $event.target.value)"
        :disabled="!showList || cardType === 0"
        class="border-b w-28 text-right bg-transparent"
      />
    </header>
    <ul class="font-handwritten text-xl" v-if="showList">
      <card-task
        v-for="(item, index) in cardItems"
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
  cardHeader: String,
  cardItems: Array,
  cardType: Number,
  showList: Boolean
})
defineEmits(['update:card-header'])

const title = computed(() => {
  if (props.cardType === 0) return 'Now'
  if (props.cardType === 1) return 'Later'
  if (props.cardType === 2) return 'Eventually'
  return 'Error'
})

const bgColor = ['bg-light-brown', 'bg-medium-brown', 'bg-dark-brown'].at(
  props.cardType
)
const focusColor = ['bg-medium-brown', 'bg-dark-brown', 'bg-light-brown'].at(
  props.cardType
)
const textColor = [
  'text-light-brown',
  'text-medium-brown',
  'text-dark-brown'
].at(props.cardType)
</script>

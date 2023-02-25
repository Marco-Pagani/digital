<template>
  <li class="flex w-full gap-6 p-3 rounded-lg mt-3 items-center relative">
    <task-signal :icon="itemStatus" @click="modalOpen = !modalOpen" />
    <input
      type="text"
      :value="itemText"
      @input="$emit('update:item-text', $event.target.value)"
      class="border-b border-off-black grow px-3 bg-transparent"
      :class="inputStyles"
    />

    <task-signal-modal
      class="absolute left-10"
      v-if="modalOpen"
      @change-icon="changeIcon"
    />
  </li>
</template>

<script setup>
import { ref, computed } from 'vue'
import TaskSignal from './task-signal.vue'
import TaskSignalModal from './task-signal-modal.vue'

const props = defineProps({
  itemStatus: Number,
  itemText: String
})
const emit = defineEmits(['update:item-status', 'update:item-text'])

const inputStyles = computed(() => {
  return props.itemStatus === 5 ? ' line-through' : ''
})

const modalOpen = ref(false)

const changeIcon = (index) => {
  modalOpen.value = false
  emit('update:item-status', index)
}
</script>

<style>
input:focus {
  outline: none;
}
</style>

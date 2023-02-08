<template>
  <li class="flex w-full gap-6 p-3 rounded-lg mt-3 items-center relative" :class="`focus-within:${colors.focus}`">
    <task-signal :icon="selectedIcon" @click="modalOpen = !modalOpen" />
    <input type="text" class=" border-b border-off-black grow px-3" :class="inputStyles" />

    <task-signal-modal class="absolute left-10" v-if="modalOpen" @change-icon="changeIcon" />
  </li>
</template>

<script setup>
import { ref, computed } from 'vue'
import TaskSignal from './task-signal.vue'
import TaskSignalModal from './task-signal-modal.vue'

const props = defineProps({
  colors: Object
})

const inputStyles = computed(() => {
  return (
    `${props.colors.base} focus:${props.colors.focus}` +
    (selectedIcon.value === 5 ? ' line-through' : '')
  )
})

const modalOpen = ref(false)

const selectedIcon = ref(0)

const changeIcon = (index) => {
  selectedIcon.value = index
  modalOpen.value = false
}
</script>
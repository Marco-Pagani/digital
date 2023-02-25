<template>
  <section class="pt-12 p-4 flex flex-col md:flex-row justify-center gap-8">
    <div class="flex relative justify-center">
      <card
        v-model:card-header="todos.today.header"
        :card-items="todos.today.items"
        :card-type="0"
        :show-list="true"
        class="z-30"
      />
      <div
        class="absolute w-[85vw] max-w-[450px] h-32 -mt-4 bg-medium-brown rounded-lg z-20"
      />
      <div
        class="absolute w-[80vw] max-w-[420px] h-32 -mt-8 bg-dark-brown rounded-lg z-10"
      />
    </div>
    <div
      class="flex justify-between flex-row md:flex-col max-w-[480px] w-full md:w-auto grow self-center md:self-stretch md:grow-0"
    >
      <div class="flex flex-row md:flex-col justify-start gap-6">
        <button class="rounded-full bg-light-brown p-4 font-medium w-14">
          <font-awesome-icon :icon="['fas', 'play']"></font-awesome-icon>
        </button>
        <button class="rounded-full bg-medium-brown p-4 font-medium w-14">
          <font-awesome-icon
            :icon="['fas', 'square']"
          ></font-awesome-icon></button
        ><button class="rounded-full bg-dark-brown p-4 font-medium w-14">
          <font-awesome-icon :icon="['fas', 'diamond']"></font-awesome-icon>
        </button>
      </div>

      <button class="rounded-full bg-dark-brown p-4 font-medium w-14 grow-0">
        <font-awesome-icon
          :icon="['far', 'calendar-minus']"
        ></font-awesome-icon>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Card from '../components/card/card.vue'

import { useTodos } from '../stores/tasks'
const todos = useTodos()
</script>

<template>
  <main class="p-8 bg-olive h-screen">
    <h1 class="font-printed text-3xl pb-10">Digital</h1>
    <section class="flex pt-[100px]">
      <card-base
        :card-data="todos.today"
        :card-type="0"
        :show-list="true"
        class="z-30"
      />
      <div v-show="!expanded" class="contents">
        <card-base
          :card-data="todos.later"
          :card-type="1"
          :show-list="false"
          class="z-20 -ml-[420px] mb-[50px] -mt-[50px]"
        />
        <card-base
          :card-data="todos.eventually"
          :card-type="2"
          :show-list="false"
          class="z-10 -ml-[420px] mb-[100px] -mt-[100px]"
        />
      </div>
      <div v-show="expanded" class="contents">
        <card-base
          :card-data="todos.later"
          :card-type="1"
          :show-list="true"
          class="z-30"
        />
        <card-base
          :card-data="todos.eventually"
          :card-type="2"
          :show-list="true"
          class="z-30"
        />
      </div>
      <button
        class="rounded bg-dark-brown h-14 p-4 ml-4"
        @click="expanded = !expanded"
      >
        {{ `${expanded ? 'Stack up' : 'Lay out'}` }}
      </button>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import CardBase from '../components/card/card-base.vue'

import { useTodos } from '../stores/tasks'
const todos = useTodos()

const expanded = ref(false)
</script>

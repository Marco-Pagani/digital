<template>
  <main class="p-8 bg-olive h-screen">
    <h1 class="font-printed text-3xl pb-10">Digital</h1>
    <section class="flex pt-[100px]">
      <card-base
        title="Now"
        subtitle="2/7/23"
        :color="0"
        :show-list="true"
        class="z-30"
      />
      <div v-show="!expanded" class="contents">
        <card-base
          title="Later"
          subtitle="February"
          :color="1"
          class="z-20 -ml-[420px] mb-[50px] -mt-[50px]"
        />
        <card-base
          title="Eventually"
          subtitle="My Dreams"
          :color="2"
          class="z-10 -ml-[420px] mb-[100px] -mt-[100px]"
        />
      </div>
      <div v-show="expanded" class="contents">
        <card-base
          title="Later"
          subtitle="February"
          :color="1"
          :show-list="true"
        />
        <card-base
          title="Eventually"
          subtitle="My Dreams"
          :color="2"
          :show-list="true"
        />
      </div>
      <button
        class="rounded bg-dark-brown h-14 p-4 ml-4"
        @click="expanded = !expanded"
      >
        {{ `${expanded ? 'Stack up' : 'Lay out'}` }}
      </button>
      <!-- <div class="bg-medium-brown rounded-lg font-printed w-[450px] -ml-[400px] mb-[50px] -mt-[50px] p-2 relative z-20">
        <p class="text-xl absolute right-2 top-4 origin-top-left rotate-90 translate-x-full ">Later</p>
      </div>
      <div class="bg-dark-brown rounded-lg font-printed w-[450px] -ml-[400px] -mb-6 mt-6 p-2 relative">
        <p class="text-xl absolute right-2 top-4 origin-top-left rotate-90 translate-x-full ">Eventually</p>
      </div> -->
    </section>
    <!-- <card-base title="Later" subtitle="February" color="1" />
    <card-base title="Eventually" subtitle="My Dreams" color="2" /> -->
  </main>
</template>

<script setup>
import { ref } from 'vue'
import CardBase from '../components/card/card-base.vue'
const expanded = ref(false)
</script>

<style>
input:focus {
  outline: none;
}
</style>
